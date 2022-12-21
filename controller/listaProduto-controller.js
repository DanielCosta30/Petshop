import { produtoService } from "../service/produto-service.js"

var criaNovaLinha = (codigo, produto, unidade, preco, estoque, id) => {
    var linhaNovoProduto = document.createElement('tr')
    var conteudo = 
`
<td class="td" data-td>${codigo}</td>
<td>${produto}</td>
<td>${unidade}</td>
<td>${preco}</td>
<td>${estoque}</td>
<td>
    <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_produto.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
    </ul>
</td> 

`
linhaNovoProduto.innerHTML = conteudo
linhaNovoProduto.dataset.id = id
return linhaNovoProduto
}

var tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) => {
   var ehBotaoDeletar =  evento.target.className === 'botao-simples botao-simples--excluir'
   if(ehBotaoDeletar){
    try {
        var linhaProduto = evento.target.closest('[data-id]')
        var id = linhaProduto.dataset.id
        await produtoService.removeProduto(id)
        linhaProduto.remove()

    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro_produto.html'

    }

   }
})

var render = async () => {
    try {
        var listaProdutos= await produtoService.listaProdutos()  

        listaProdutos.forEach (elemento => {
        tabela.appendChild(criaNovaLinha(elemento.codigo,elemento.produto, elemento.unidade, elemento.preco, 
        elemento.estoque, elemento.id))       
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro_produto.html'  
    }
    
}
render()

