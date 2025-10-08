 
 // Esconder menu
 
const menu = document.getElementById('menu')
function menuBurger() {
  if(window.innerWidth >= 820){
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

menuBurger()
window.addEventListener('resize', menuBurger) //Executa quando existe alteração no tamanho da tela

const burger = document.getElementById('burger')

burger.addEventListener('click', function(){
  if(menu.style.display == 'none'){
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
})

// Fechar menu ao clicar em um item
const links = menu.querySelectorAll('button')
links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 820) {
      menu.style.display = 'none'
    }
  })
})


 // Pega todos os botões e seções
const botoes = {
  ordemServico: document.getElementById('ordemServico'),
  cMaterial: document.getElementById('cMaterial'),
  lMaterial: document.getElementById('lMaterial'),
  laudoTec: document.getElementById('laudoTec'),
  ajuda: document.getElementById('ajuda')
};

const secoes = {
  ordemServico: document.getElementById('conteudoOrdemServico'),
  cMaterial: document.getElementById('conteudoCMaterial'),
  lMaterial: document.getElementById('conteudoLMaterial'),
  laudoTec: document.getElementById('conteudoLaudoTec'),
  ajuda: document.getElementById('conteudoAjuda')
};

// Função para ocultar todas as seções
function ocultarTodas() {
  for (let secao in secoes) {
    secoes[secao].style.display = 'none';
  }
}

// Adiciona evento a cada botão
for (let nome in botoes) {
  botoes[nome].addEventListener('click', function() {
    ocultarTodas();
    secoes[nome].style.display = 'block'; // mostra a seção correspondente
  });
}

// Inicia com tudo oculto
ocultarTodas();   
