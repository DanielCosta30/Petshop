import { clienteService } from "../service/cliente-service.js"

(async() =>{

var pegaURL = new URL(window.location)

var id = pegaURL.searchParams.get('id')

var inputNome = document.querySelector('[data-nome]')
var inputEmail = document.querySelector('[data-email]')



var dados = await clienteService.detalhaCliente(id)  
    inputNome.value = dados.nome
    inputEmail.value = dados.email

var formalario = document.querySelector('[data-form]')

formalario.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    await clienteService.atualizaCliente (id, inputNome.value, inputEmail.value)   
    window.location.href = "../telas/edicao_concluida.html"  
})

}) ()
