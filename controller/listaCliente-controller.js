import { clienteService } from "../service/cliente-service.js"

var criaNovaLinha = (nome, email, id) => {
    var linhaNovoCliente = document.createElement('tr')
    var conteudo = 
`
<td class="td" data-td>${nome}</td>
<td>${email}</td>
<td>
    <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
    </ul>
</td> 

`
linhaNovoCliente.innerHTML = conteudo
linhaNovoCliente.dataset.id = id
return linhaNovoCliente
}

var tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) => {
   var ehBotaoDeletar =  evento.target.className === 'botao-simples botao-simples--excluir'
   if(ehBotaoDeletar){
    try {
        var linhaCliente = evento.target.closest('[data-id]')
        var id = linhaCliente.dataset.id
        await clienteService.removeCliente(id)
        linhaCliente.remove()

    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'

    }

   }
})


var render = async () => {
    try {
        var listaClientes= await clienteService.listaClientes()  

        listaClientes.forEach (elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email,elemento.contato, elemento.id))       
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'  
    }
    
}
render()

