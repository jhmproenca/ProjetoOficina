let btnCadastrarOS = document.getElementById('btnCadastrarOS')
let resOS = document.getElementById('resOS')

btnCadastrarOS.addEventListener('click', function() {
    // Pega os valores dos campos
    let codigo = document.getElementById('codigoOS').value.trim()
    let descricao = document.getElementById('descricaoOS').value.trim()
    let status = document.getElementById('statusOS').value.trim()

    // Verifica se algum campo está vazio
    if (codigo === '' || descricao === '' || status === '') {
        alert('Por favor, preencha todos os campos antes de cadastrar.')
        return // interrompe a execução se faltar algo
    } else {
     // Se tudo estiver preenchido, cria o objeto
    let cadOS = {
        codigo: Number(codigo),
        descricao: descricao,
        status: status
    }

    const addlinha = document.createElement('tr')

    addlinha.innerHTML = `
        <td>${cadOS.codigo}</td>
        <td>${cadOS.descricao}</td>
        <td>${cadOS.status}</td>
        `
    alert('Cadastro realizado com sucesso!')
    resOS.appendChild(addlinha)    

    

    //Limpa os campos preenchidos após cadastro
    document.getElementById('codigoOS').value =''
    document.getElementById('descricaoOS').value = ''
    document.getElementById('statusOS').value = ''
    }

    
})