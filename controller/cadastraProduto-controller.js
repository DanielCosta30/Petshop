import { produtoService } from "../service/produto-service.js"

var formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento)=> {
    try {
        evento.preventDefault()
        var codigo = evento.target.querySelector('[data-codigo]').value
        var produto = evento.target.querySelector('[data-produto]').value
        var unidade = evento.target.querySelector('[data-unidade]').value
        var preco = evento.target.querySelector('[data-preco]').value
        var estoque = evento.target.querySelector('[data-estoque]').value
    
        await produtoService.criaProduto(codigo,produto,unidade,preco,estoque)
        window.location.href = '../telas/cadastro_prod_concluido.html'       
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro_produto.html'  
    }
    
})