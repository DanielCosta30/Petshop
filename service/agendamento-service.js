const criaNovaLinha = (cliente, pet, data, hora, servico) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${cliente}</td>
                    <td>${pet}</td>
                    <td>${data}</td>
                    <td>${hora}</td>
                    <td>${servico}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_agendamento.html" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td> 
                    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}


const tabela = document.querySelector('[data-tabela]')


var listaAgendamento = () => {
    return fetch(`http://localhost:3000/agendamento`)
    .then ( resposta => {
            return resposta.json()      
    })
}

listaAgendamento()
.then(data => {
    data.forEach ( elemento=> {
        tabela.appendChild (criaNovaLinha ( elemento.cliente, elemento.pet, elemento.data,elemento.hora, elemento.servico ))
    })
})



