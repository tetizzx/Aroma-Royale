// abrirModal('m1') abre o modal com id m1
function abrirModal(id){
  const modal = document.getElementById(id);
  if(!modal) return;
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden','false');
  // trava o scroll do body
  document.body.style.overflow = 'hidden';
}

// fecharModal('m1')
function fecharModal(id){
  const modal = document.getElementById(id);
  if(!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

// fechar ao clicar fora do conteudo do modal
window.addEventListener('click', function(e){
  // se clicou na overlay (classe modal), fecha
  if(e.target.classList && e.target.classList.contains('modal')){
    e.target.style.display = 'none';
    e.target.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
});

// fechar com ESC
window.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal').forEach(m => {
      if(m.style.display === 'block'){
        m.style.display = 'none';
        m.setAttribute('aria-hidden','true');
      }
    });
    document.body.style.overflow = '';
  }
});
