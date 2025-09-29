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



let codigo = [] //Lista para verificar se código já existe
let resMat = document.getElementById('resMat')
let btnCadastrar = document.getElementById('btnCadastrar')

//Cadastro de material
btnCadastrar.addEventListener('click', function(){
  let cadMat = {
  nome: document.getElementById('nomeMat').value,
  codigo: Number(document.getElementById('codMat').value),
  descricao: document.getElementById('desMat').value,
  imagem: document.getElementById('imgMat').value
  }

  //Verifica se o código já existe
  let pesq = codigo.indexOf(cadMat.codigo)

  if(pesq == -1){
     codigo.push(cadMat.codigo)

  const addlinha = document.createElement('tr')

  addlinha.innerHTML = `
    <td>${cadMat.codigo}</td>
    <td>${cadMat.nome}</td>
    <td>${cadMat.descricao}</td>
    <td>IMG</td>
    `

  resMat.appendChild(addlinha)

  document.getElementById('nomeMat').value = ''
  document.getElementById('codMat').value = ''
  document.getElementById('desMat').value = ''
  document.getElementById('imgMat').value = ''
  }else{
   alert('O código digitado já existe!')
    document.getElementById('codMat').value = ''

  }
  

})