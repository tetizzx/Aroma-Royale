<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

include 'conexao.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Dados JSON inválidos.']);
    exit;
}

$nome = $data['nome'] ?? '';
$endereco = $data['endereco'] ?? '';
$cep = $data['cep'] ?? '';
$carrinho = $data['carrinho'] ?? [];
$total = $data['total'] ?? 0;
$frete = $data['frete'] ?? 0;

if (empty($nome) || empty($endereco) || empty($cep) || empty($carrinho)) {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Dados incompletos.']);
    exit;
}

// Salvar cliente
$stmt = $conn->prepare("INSERT INTO clientes (nome, endereco, cep) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nome, $endereco, $cep);
$stmt->execute();
$cliente_id = $stmt->insert_id;
$stmt->close();

// Salvar pedido
$stmt = $conn->prepare("INSERT INTO pedidos (cliente_id, total, frete) VALUES (?, ?, ?)");
$stmt->bind_param("idd", $cliente_id, $total, $frete);
$stmt->execute();
$pedido_id = $stmt->insert_id;
$stmt->close();

// Salvar itens
$stmt = $conn->prepare("INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unit) VALUES (?, ?, ?, ?)");
foreach ($carrinho as $item) {
    $stmt->bind_param("iiid", $pedido_id, $item['id'], $item['qtd'], $item['preco']);
    $stmt->execute();
}
$stmt->close();

$conn->close();

echo json_encode(['status' => 'sucesso']);
exit;