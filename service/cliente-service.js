
var listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then ( resposta => {
        if (resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel listar os clientes')
       
    })
}

var criaCliente = (nome, email, contato) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
                nome: nome,
                email: email,
                contato: contato
            })
    })
    .then( resposta => {
        if( resposta.ok){
        return resposta.body
        }
        throw new Error('Não foi possivel criar um cliente')
    })
}

var removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }) .then( resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possivel remover cliente')
        }
    })
}

var detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then ( resposta => {
        if(resposta.ok){
        return resposta.json()  
        }
        throw new Error('Não foi possivel detalhar cliente')
        
    })
}

var atualizaCliente = (id, nome, email, contato) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify ({
                nome: nome,
                email: email,
                contato: contato
            })        
    })     
    .then ( resposta => {
        if(resposta.ok) {
         return resposta.json()
        }
        throw new Error('Não foi possivel atualizar cliente')
        
    })
}

export var clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}



