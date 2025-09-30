// ===================================================================
// "BANCO DE DADOS" DE PERFUMES FEMININOS
// ===================================================================
const perfumes = [
    {
      id: 'f1',
      nome: 'Coco Mademoiselle',
      marca: 'Chanel • 100 ml',
      imagem: 'img/coco_mademoiselle.webp',
      notasSaida: 'Laranja, Bergamota, Tangerina',
      notasCorpo: 'Rosa Turca, Jasmim, Mimosa',
      notasFundo: 'Patchouli, Baunilha, Almíscar Branco',
      familia: 'Chipre Floral',
      fixacao: 'Alta',
      projecao: 'Alta',
      info: 'Um clássico moderno da perfumaria. Fragrância elegante, sensual e versátil, perfeita para a mulher livre e audaciosa.'
    },
    {
      id: 'f2',
      nome: 'La Vie Est Belle',
      marca: 'Lancôme • 100 ml',
      imagem: 'img/la_vie_est_belle.webp',
      notasSaida: 'Pera, Groselha Preta',
      notasCorpo: 'Íris, Jasmim, Flor de Laranjeira',
      notasFundo: 'Pralinê, Baunilha, Patchouli',
      familia: 'Floral Frutado Gourmand',
      fixacao: 'Muito Alta',
      projecao: 'Alta',
      info: 'Um manifesto de felicidade. Perfume doce e marcante, conhecido por sua durabilidade e rastro poderoso.'
    },
    {
      id: 'f3',
      nome: 'Libre',
      marca: 'Yves Saint Laurent • 90 ml',
      imagem: 'img/ysl_libre.webp',
      notasSaida: 'Lavanda, Mandarina, Groselha Preta',
      notasCorpo: 'Jasmim, Flor de Laranjeira',
      notasFundo: 'Baunilha de Madagascar, Cedro, Âmbar',
      familia: 'Floral Aromático',
      fixacao: 'Alta',
      projecao: 'Alta',
      info: 'A fragrância da liberdade. Combina a lavanda, tradicionalmente masculina, com a sensualidade da flor de laranjeira, criando um aroma único e sofisticado.'
    }
  ];
  
  // ===================================================================
  // PASSO 2: CÓDIGO JAVASCRIPT REATORADO
  // ===================================================================
  
  // Pega as referências dos elementos do modal UMA VEZ SÓ para não ficar repetindo
  const modal = document.getElementById('modal-produto');
  const modalFecharBtn = document.getElementById('modal-fechar');
  const modalImg = document.getElementById('modal-img');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalMarca = document.getElementById('modal-marca');
  const modalNotasSaida = document.getElementById('modal-notas-saida');
  const modalNotasCorpo = document.getElementById('modal-notas-corpo');
  const modalNotasFundo = document.getElementById('modal-notas-fundo');
  const modalFamilia = document.getElementById('modal-familia');
  const modalFixacao = document.getElementById('modal-fixacao');
  const modalProjecao = document.getElementById('modal-projecao');
  const modalInfo = document.getElementById('modal-info');
  
  
  // --- FUNÇÃO DE ABRIR O MODAL ---
  // Agora ela busca os dados no nosso "banco de dados" e preenche o modal antes de abrir
  function abrirModal(perfumeId) {
    // 1. Encontra o perfume correto no array 'perfumes'
    const perfume = perfumes.find(p => p.id === perfumeId);
    if (!perfume) return; // Se não encontrar o perfume, não faz nada
  
    // 2. Preenche o HTML do modal com os dados do perfume
    modalImg.src = perfume.imagem;
    modalImg.alt = perfume.nome;
    modalTitulo.textContent = perfume.nome;
    modalMarca.textContent = perfume.marca;
    modalNotasSaida.textContent = perfume.notasSaida;
    modalNotasCorpo.textContent = perfume.notasCorpo;
    modalNotasFundo.textContent = perfume.notasFundo;
    modalFamilia.textContent = perfume.familia;
    modalFixacao.textContent = perfume.fixacao;
    modalProjecao.textContent = perfume.projecao;
    modalInfo.textContent = perfume.info;
  
    // 3. Mostra o modal e trava o scroll do body
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  
  // --- FUNÇÃO DE FECHAR O MODAL ---
  // Agora ela é mais simples, pois só existe UM modal para fechar
  function fecharModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Libera o scroll
  }
  
  
  // --- EVENTOS PARA FECHAR O MODAL ---
  
  // 1. Clicar no botão 'X'
  modalFecharBtn.addEventListener('click', fecharModal);
  
  // 2. Clicar fora do conteúdo do modal (na overlay escura)
  modal.addEventListener('click', function(e) {
    // Se o alvo do clique for o próprio modal (a overlay), fecha.
    if (e.target === modal) {
      fecharModal();
    }
  });
  
  // 3. Pressionar a tecla 'Escape'
  window.addEventListener('keydown', function(e) {
    // Se a tecla for 'Escape' E o modal estiver visível, fecha.
    if (e.key === 'Escape' && modal.style.display === 'block') {
      fecharModal();
    }
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
  
    const produtoId = urlParams.get('produto');
  
    if (produtoId) {
      abrirModal(produtoId);
    }
  });