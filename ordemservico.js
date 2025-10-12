let btnCadastrarOS = document.getElementById('btnCadastrarOS')
let resOS = document.getElementById('resOS')
let codigoOS = []
let descricaoOS = []
let statusOS = []
let posicao = []

btnCadastrarOS.addEventListener('click', function() {
    // Pega os valores dos campos
    let codigo = document.getElementById('codigoOS').value.trim()
    let descricao = document.getElementById('descricaoOS').value.trim()
    let status = document.getElementById('statusOS').value.trim()

    // Verifica se algum campo está vazio
    if (codigo === '' || descricao === '' || status === '') {
        alert('Por favor, preencha todos os campos antes de cadastrar.')
        return // interrompe a execução se faltar algo
    } 
    
    let pesqOS = codigoOS.indexOf(codigo)

    if(pesqOS == -1){
        codigoOS.push(codigo)
        descricaoOS.push(descricao)
        statusOS.push(status)
    
        const addlinha = document.createElement('tr')
        addlinha.innerHTML = `
            <td>${codigo}</td>
            <td>${descricao}</td>
            <td><select name="Status" id="statusOS"><option value="${status}">${status}</option>
            <option value="Concluído">Concluído</option>
            </select></td>
            `
        alert('Cadastro realizado com sucesso!')
        alert(`${codigoOS} ${descricaoOS} ${statusOS}`)
        resOS.appendChild(addlinha)    

        

        //Limpa os campos preenchidos após cadastro
        document.getElementById('codigoOS').value =''
        document.getElementById('descricaoOS').value = ''
        document.getElementById('statusOS').value = ''
    }else {
        alert('Essa ordem de serviço já está cadastrada!')
    }
    
})