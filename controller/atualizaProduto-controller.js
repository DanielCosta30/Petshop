import { produtoService} from "../service/produto-service.js"

(async() =>{

var pegaURL = new URL(window.location)

var id = pegaURL.searchParams.get('id')

var inputCodigo = document.querySelector('[data-codigo]')
var inputProduto = document.querySelector('[data-produto]')
var inputUnidade = document.querySelector('[data-unidade]')
var inputPreco = document.querySelector('[data-preco]')
var inputEstoque = document.querySelector('[data-estoque]')



var dados = await produtoService.detalhaProduto(id)  
    inputCodigo.value = dados.codigo
    inputProduto.value = dados.produto
    inputUnidade.value = dados.unidade
    inputPreco.value = dados.preco
    inputEstoque.value = dados.estoque

var formalario = document.querySelector('[data-form]')

formalario.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    await produtoService.atualizaProduto (id, inputCodigo.value, inputProduto.value, inputUnidade.value, inputPreco.value, inputEstoque.value)   
    window.location.href = "../telas/edicao_prod_concluida.html"  
})

}) ()
