// ===================================================================
// PASSO 1: NOSSO "BANCO DE DADOS" DE PERFUMES
// ===================================================================
const perfumes = [
  {
    id: 'm1',
    nome: 'Dior Sauvage — Eau de Parfum',
    marca: 'Dior • 100 ml',
    imagem: 'img/sauvage.webp',
    notasSaida: 'Bergamota',
    notasCorpo: 'Pimenta Sichuan',
    notasFundo: 'Ambroxan',
    familia: 'Amadeirado Especiado',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Para melhor desempenho, borrife nas áreas mais quentes do corpo (pescoço, pulsos, antebraços). Evite exposição a luz e calor direto.'
  },
  {
    id: 'm2',
    nome: 'Creed Aventus',
    marca: 'Creed • 100 ml',
    imagem: 'img/aventus.webp',
    notasSaida: 'Abacaxi, Bergamota',
    notasCorpo: 'Almíscar, Musgo de Carvalho',
    notasFundo: 'Madeira de cedro',
    familia: 'Chipre Frutado',
    fixacao: 'Muito Alta',
    projecao: 'Alta',
    info: 'Armazenar em local seco e evitar calor excessivo. Aplicar em pontos de pulso para melhor projeção.'
  },
  {
    id: 'm3',
    nome: 'La Nuit de L\'Homme',
    marca: 'Yves Saint Laurent • 100 ml',
    imagem: 'img/La Nuit de L\'Homme.jpeg',
    notasSaida: 'Cardamomo, Bergamota',
    notasCorpo: 'Lavanda, Cedro',
    notasFundo: 'Vetiver',
    familia: 'Amadeirado Especiado',
    fixacao: 'Média',
    projecao: 'Média',
    info: 'Perfeito para eventos noturnos. Aplicar com moderação em roupas para evitar manchas.'
  },
  {
    id: 'm4',
    nome: 'Noir Extreme',
    marca: 'Tom Ford • 100 ml',
    imagem: 'img/Noir Extreme.jpeg',
    notasSaida: 'Cardamomo, Noz-moscada, Açafrão',
    notasCorpo: 'Kulfi, Rosa, Jasmim',
    notasFundo: 'Baunilha, Âmbar, Sândalo',
    familia: 'Oriental Amadeirado',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Fragrância intensa e luxuosa, ideal para ocasiões especiais e noites frias. Manter longe de calor extremo.'
  },
  {
    id: 'm5',
    nome: 'Bleu de Chanel',
    marca: 'Chanel • 100 ml',
    imagem: 'img/Bleu de Chanel.jpeg',
    notasSaida: 'Limão, Hortelã, Pimenta Rosa',
    notasCorpo: 'Gengibre, Noz-moscada, Jasmim',
    notasFundo: 'Sândalo, Cedro, Incenso',
    familia: 'Amadeirado Aromático',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Um perfume extremamente versátil e elegante, perfeito para qualquer ocasião, do trabalho a um evento social.'
  },
  {
    id: 'm6',
    nome: 'Layton',
    marca: 'Parfums de Marly • 125 ml',
    imagem: 'img/Layton.jpeg',
    notasSaida: 'Maçã, Lavanda, Bergamota',
    notasCorpo: 'Gerânio, Violeta, Jasmim',
    notasFundo: 'Baunilha, Cardamomo, Sândalo',
    familia: 'Oriental Floral',
    fixacao: 'Muito Alta',
    projecao: 'Alta',
    info: 'Fragrância de nicho com alta performance, ideal para quem busca sofisticação, exclusividade e durabilidade.'
  }
// (aqui termina o objeto do perfume m6, então adicione uma vírgula)
  ,
  {
    id: 'm7',
    nome: 'Acqua di Giò Profondo',
    marca: 'Giorgio Armani • 125 ml',
    imagem: 'img/Acqua di Giò Profondo.jpeg',
    notasSaida: 'Notas marinhas, Bergamota, Mandarina verde',
    notasCorpo: 'Alecrim, Lavanda, Cipreste',
    notasFundo: 'Patchouli, Almíscar, Âmbar',
    familia: 'Aromático Aquático',
    fixacao: 'Alta',
    projecao: 'Média',
    info: 'Uma interpretação intensa e profunda do clássico Acqua di Giò, perfeita para uso diário e dias mais quentes.'
  },
  {
    id: 'm8',
    nome: 'Invictus',
    marca: 'Paco Rabanne • 100 ml',
    imagem: 'img/Invictus.jpeg',
    notasSaida: 'Toranja, Notas marinhas',
    notasCorpo: 'Folha de Louro, Jasmim',
    notasFundo: 'Madeira Guaiac, Musgo de Carvalho, Âmbar Cinzento',
    familia: 'Amadeirado Aquático',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Fragrância energética que representa a vitória. Adequada para ocasiões informais e atividades diurnas.'
  },
  {
    id: 'm9',
    nome: 'Boss Bottled Elixir',
    marca: 'Hugo Boss • 100 ml',
    imagem: 'img/Boss Bottled.webp',
    notasSaida: 'Incenso, Cardamomo',
    notasCorpo: 'Patchouli, Vetiver',
    notasFundo: 'Ládano, Cedro',
    familia: 'Amadeirado Especiado',
    fixacao: 'Muito Alta',
    projecao: 'Média-Alta',
    info: 'Uma versão mais concentrada e sofisticada do clássico Boss Bottled, ideal para noites e eventos formais.'
  }
  // (aqui termina o objeto do perfume m9, então adicione uma vírgula)
  ,
  {
    id: 'm10',
    nome: 'Le Male',
    marca: 'Jean Paul Gaultier • 125 ml',
    imagem: 'img/Le Male.webp',
    notasSaida: 'Lavanda, Menta, Bergamota',
    notasCorpo: 'Canela, Flor de Laranjeira',
    notasFundo: 'Baunilha, Fava Tonka, Sândalo',
    familia: 'Oriental Fougère',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Um clássico icônico da perfumaria, conhecido por sua doçura envolvente e sensual. Ótimo para encontros e noites.'
  },
  {
    id: 'm11',
    nome: 'One Million',
    marca: 'Paco Rabanne • 100 ml',
    imagem: 'img/One Million.webp',
    notasSaida: 'Toranja, Hortelã, Mandarina',
    notasCorpo: 'Canela, Rosa, Especiarias',
    notasFundo: 'Couro, Âmbar, Patchouli',
    familia: 'Amadeirado Especiado',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Fragrância marcante e opulenta, feita para quem quer ser notado. Ideal para festas e eventos noturnos.'
  },
  {
    id: 'm12',
    nome: 'Bad Boy',
    marca: 'Carolina Herrera • 100 ml',
    imagem: 'img/Bad Boy.webp',
    notasSaida: 'Pimenta Branca, Pimenta Preta, Bergamota',
    notasCorpo: 'Sálvia, Cedro',
    notasFundo: 'Fava Tonka, Cacau, Âmbar',
    familia: 'Oriental Especiado',
    fixacao: 'Média',
    projecao: 'Média-Alta',
    info: 'Representa a dualidade do homem moderno. Um perfume que equilibra o picante com um fundo adocicado e cremoso.'
  }
  // (aqui termina o objeto do perfume m12, então adicione uma vírgula)
  ,
  {
    id: 'm13',
    nome: 'Light Blue Pour Homme',
    marca: 'Dolce & Gabbana • 100 ml',
    imagem: 'img/Light Blue.jpg',
    notasSaida: 'Toranja, Bergamota, Mandarina Siciliana',
    notasCorpo: 'Pimenta, Alecrim, Pau-rosa',
    notasFundo: 'Almíscar, Incenso, Musgo de Carvalho',
    familia: 'Cítrico Aromático',
    fixacao: 'Média',
    projecao: 'Média',
    info: 'Um perfume extremamente refrescante e casual, a cara do verão mediterrâneo. Perfeito para dias quentes.'
  },
  {
    id: 'm14',
    nome: 'Gentleman',
    marca: 'Givenchy • 100 ml',
    imagem: 'img/Gentleman.webp',
    notasSaida: 'Pera, Cardamomo, Abacaxi',
    notasCorpo: 'Íris, Lavanda, Gerânio',
    notasFundo: 'Couro, Casca de Baunilha Negra, Patchouli',
    familia: 'Amadeirado Aromático',
    fixacao: 'Alta',
    projecao: 'Média-Alta',
    info: 'Uma fragrância elegante e moderna que equilibra no0tas florais e amadeiradas. Ótima para ocasiões formais e trabalho.'
  },
  {
    id: 'm15',
    nome: 'Spicebomb',
    marca: 'Viktor & Rolf • 90 ml',
    imagem: 'img/Spicebomb EDP.jpeg',
    notasSaida: 'Pimenta Rosa, Toranja, Bergamota',
    notasCorpo: 'Canela, Açafrão, Pimenta',
    notasFundo: 'Tabaco, Couro, Vetiver',
    familia: 'Amadeirado Especiado',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Uma explosão de especiarias quentes e viciantes. Perfeito para noites frias e para quem quer deixar uma impressão marcante.'
  },
  {
    id: 'm16',
    nome: 'Lattafa Asad',
    marca: 'Lattafa • 100 ml',
    imagem: 'img/lattafa_asad.webp',
    notasSaida: 'Pimenta Preta, Tabaco, Abacaxi',
    notasCorpo: 'Patchouli, Café, Íris',
    notasFundo: 'Âmbar, Baunilha, Benjoim',
    familia: 'Âmbar Especiado',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Uma fragrância masculina poderosa e picante com uma doçura sutil, ideal para climas mais amenos e uso noturno.'
  },
  {
    id: 'm17',
    nome: 'Afnan 9 PM',
    marca: 'Afnan • 100 ml',
    imagem: 'img/afnan_9pm.webp',
    notasSaida: 'Maçã, Canela, Lavanda Selvagem',
    notasCorpo: 'Flor de Laranjeira, Lírio-do-vale',
    notasFundo: 'Baunilha, Fava Tonka, Âmbar',
    familia: 'Âmbar Baunilha',
    fixacao: 'Muito Alta',
    projecao: 'Alta',
    info: 'Doce, potente e duradouro. É a escolha perfeita para a vida noturna, garantindo elogios e presença.'
  },
  {
    id: 'm18',
    nome: 'Club de Nuit Intense Man',
    marca: 'Armaf • 105 ml',
    imagem: 'img/club_de_nuit.webp',
    notasSaida: 'Limão, Abacaxi, Groselha Preta',
    notasCorpo: 'Bétula, Jasmim, Rosa',
    notasFundo: 'Almíscar, Âmbar Cinzento, Baunilha',
    familia: 'Amadeirado Especiado',
    fixacao: 'Muito Alta',
    projecao: 'Muito Alta',
    info: 'O clássico dos perfumes árabes. Uma fragrância cítrica e esfumaçada com performance lendária, extremamente versátil.'
  },
  {
    id: 'm19',
    nome: 'Lattafa Khamrah',
    marca: 'Lattafa • 100 ml',
    imagem: 'img/lattafa_khamrah.webp',
    notasSaida: 'Canela, Noz-moscada, Bergamota',
    notasCorpo: 'Tâmaras, Pralinê, Tuberosa',
    notasFundo: 'Baunilha, Fava Tonka, Benjoim, Âmbar',
    familia: 'Âmbar Baunilha',
    fixacao: 'Muito Alta',
    projecao: 'Alta',
    info: 'Fragrância doce e gourmand com notas de tâmaras e canela, frequentemente comparada a sobremesas e bebidas de luxo.'
  },
  {
    id: 'm20',
    nome: 'Le Beau Le Parfum',
    marca: 'Jean Paul Gaultier • 125 ml',
    imagem: 'img/jpg_lebeau.webp',
    notasSaida: 'Abacaxi, Íris, Cipreste',
    notasCorpo: 'Coco, Notas Amadeiradas',
    notasFundo: 'Fava Tonka, Sândalo, Âmbar',
    familia: 'Amadeirado Aromático',
    fixacao: 'Alta',
    projecao: 'Alta',
    info: 'Tem seu aroma tropical e sedutor. A nota de coco cremoso o torna único e uma máquina de elogios.'
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
// ===================================================================
// CÓDIGO PARA ABRIR MODAL AUTOMATICAMENTE (VIA URL)
// ===================================================================

// Este código executa assim que a página termina de carregar
window.addEventListener('DOMContentLoaded', () => {
  // 1. Pega a URL completa da página atual
  const urlParams = new URLSearchParams(window.location.search);

  // 2. Procura por um parâmetro chamado 'produto' na URL
  const produtoId = urlParams.get('produto');

  // 3. Se encontrou o parâmetro 'produto' (ex: 'm5')...
  if (produtoId) {
    // ...chama a nossa função para abrir o modal com esse ID!
    abrirModal(produtoId);
  }
});