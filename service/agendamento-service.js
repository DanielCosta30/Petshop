// Realizar a conexão com a API
var listaAgendamento = () => {
    return fetch(`http://localhost:3000/agendamento`)
    .then ( resposta => {
            return resposta.json()      
    })
}

export var agendamentoService = {
    listaAgendamento
}





