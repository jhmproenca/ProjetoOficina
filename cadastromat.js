// Script da seção Material

let codigo = [] //Lista para verificar se código já existe
let resMat = document.getElementById('resMat')
let btnCadastrarMat = document.getElementById('btnCadastrarMat')

//Cadastro de material
btnCadastrarMat.addEventListener('click', function(){
  let cadMat = {
  nome: document.getElementById('nomeMat').value,
  codigo: Number(document.getElementById('codMat').value),
  descricao: document.getElementById('desMat').value,
  imagem: document.getElementById('imgMat').value
  }

  //Verifica se o código já existe
  let pesq = codigo.indexOf(cadMat.codigo)

  if(pesq == -1){ //se o código não existir, cadastra
    codigo.push(cadMat.codigo)

    const addlinha = document.createElement('tr')

    addlinha.innerHTML = `
    <td>${cadMat.codigo}</td>
    <td>${cadMat.nome}</td>
    <td>${cadMat.descricao}</td>
    <td>IMG</td>
    `
    alert('Material cadastrado com sucesso!')
    resMat.appendChild(addlinha)

    document.getElementById('nomeMat').value = ''
    document.getElementById('codMat').value = ''
    document.getElementById('desMat').value = ''
    document.getElementById('imgMat').value = ''
  }else{ //se o código existir, alerta
    alert('O código digitado já existe!')
    document.getElementById('codMat').value = ''

  }
  

})