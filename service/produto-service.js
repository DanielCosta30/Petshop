
var listaProdutos = () => {
    return fetch(`http://localhost:3000/produto`)
    .then ( resposta => {
        if (resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel listar os produtos')
       
    })
}

var criaProduto = (codigo, produto, unidade, preco, estoque) => {
    return fetch(`http://localhost:3000/produto`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
                codigo: codigo,
                produto: produto,
                unidade: unidade,
                preco: preco,
                estoque: estoque
            })
    })
    .then( resposta => {
        if( resposta.ok){
        return resposta.body
        }
        throw new Error('Não foi possivel criar um produto')
    })
}

var detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produto/${id}`)
    .then ( resposta => {
        if(resposta.ok){
        return resposta.json()  
        }
        throw new Error('Não foi possivel detalhar produto')
        
    })
}

var atualizaProduto = (id, codigo, produto, unidade, preco, estoque) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify ({
            codigo: codigo,
            produto: produto,
            unidade: unidade,
            preco: preco,
            estoque: estoque
            })        
    })     
    .then ( resposta => {
        if(resposta.ok) {
         return resposta.json()
        }
        throw new Error('Não foi possivel atualizar produto')
        
    })
}


export var produtoService = {
    listaProdutos,
    detalhaProduto,
    criaProduto,
    atualizaProduto
}



