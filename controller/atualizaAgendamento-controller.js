import { agendamentoService } from "../service/agendamento-service.js"

var pegaUrl = new URL(window.location)

var id = pegaUrl.searchParams.get('id')

var inputCliente = document.querySelector('[data-cliente]')
var inputPet = document.querySelector('[data-pet]')
var inputData = document.querySelector('[data-data]')
var inputHora = document.querySelector('[data-hora]')
var inputServico = document.querySelector('[data-servico]')

agendamentoService.detalhaAgendamento(id)
.then (dados => {
    inputCliente.value = dados.cliente
    inputPet.value = dados.pet
    inputData.value = dados.data
    inputHora.value = dados.hora 
    inputServico.value = dados.servico
})


var formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    agendamentoService.atualizaAgendamento(id, inputCliente.value,inputPet.value, inputData.value, inputHora.value, inputServico.value)
    .then (() =>
    window.location.href = '../telas/edicao_agend_concluida.html')
})
