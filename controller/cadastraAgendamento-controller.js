import { agendamentoService } from "../service/agendamento-service.js"

var formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault()
    var cliente = evento.target.querySelector('[data-cliente]').value
    var pet = evento.target.querySelector('[data-pet]').value
    var data = evento.target.querySelector('[data-data]').value
    var hora = evento.target.querySelector('[data-hora]').value
    var servico = evento.target.querySelector('[data-servico]').value

    agendamentoService.criaAgendamento( cliente, pet, data, hora, servico)
    .then (()=>{
        window.location.href = '../telas/cadastro_agen_concluido.html'
    })
})