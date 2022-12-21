import { clienteService } from "../service/cliente-service.js"

var formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento)=> {
    try {
        evento.preventDefault()
        var nome = evento.target.querySelector('[data-nome]').value
        var email = evento.target.querySelector('[data-email]').value
    
        await clienteService.criaCliente(nome,email)
        window.location.href = '../telas/cadastro_concluido.html'       
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'  
    }
    
})