import { agendamentoService } from '../service/agendamento-service.js'

//cria templade
const criaNovaLinha = (cliente, pet, data, hora, servico) => {
    const linhaNovoAgendamento = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${cliente}</td>
                    <td>${pet}</td>
                    <td>${data}</td>
                    <td>${hora}</td>
                    <td>${servico}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_agendamento.html" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td> 
                    `
    linhaNovoAgendamento.innerHTML = conteudo
    return linhaNovoAgendamento
}

//Percorrer o dom
const tabela = document.querySelector('[data-tabela]')

// Pegando os dados da API e realizando um loop para exibir os dados na tabela.

agendamentoService.listaAgendamento()
.then(data => {
    data.forEach ( elemento=> {
        tabela.appendChild (criaNovaLinha ( elemento.cliente, elemento.pet, elemento.data,elemento.hora, elemento.servico ))
    })
})