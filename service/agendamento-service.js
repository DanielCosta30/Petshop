// Realizar a conexão com a API
var listaAgendamento = () => {
    return fetch(`http://localhost:3000/agendamento`)
    .then ( resposta => {
            return resposta.json()      
    })
}

var criaAgendamento = (cliente, pet, data, hora, servico) => {
    return fetch(`http://localhost:3000/agendamento`, {
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify (
            {
                cliente: cliente,
                pet: pet,
                data: data,
                hora: hora,
                servico: servico      
        }) 
    })
    .then (resposta => {
        return resposta.body
    })
}

var removeAgendamento = (id) => {
    return fetch(`http://localhost:3000/agendamento/${id}`, {
        method:'DELETE'
    })
}

var detalhaAgendamento = (id) => {
    return fetch(`http://localhost:3000/agendamento/${id}`)
    .then ( resposta => {
            return resposta.json()      
    })
}  

var atualizaAgendamento = (id, cliente, pet, data, hora, servico) => {
    return fetch(`http://localhost:3000/agendamento/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
            
        },
        body: JSON.stringify(
            {
               cliente: cliente,
               pet:  pet,
               data: data,
               hora: hora,
               servico: servico
        })
    })
    .then(resposta => {
        return resposta.json()
    })
}


export var agendamentoService = {
    listaAgendamento,
    criaAgendamento,
    removeAgendamento,
    detalhaAgendamento,
    atualizaAgendamento
}





