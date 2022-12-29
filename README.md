

# PetShop
<h1 align="center">:file_cabinet: Projeto Petshop</h1>

## :memo: Descrição:
O projeto possui duas parte, front end e back-end, onde a primeira parte cosiste em:
<br>Front-End:</br> Primeira parte é um CRUD com cadastro de clientes, produtos e agendamento.
<br>Back-end:</br> Segunda parte será utilizado Java e  spring boot, para armazenamento dos dados e gerar URL para ser consumida pelo front.
<br>db.json:</br> Atualmente os dados estão sendo armagezados no json e feito o get e put com o fetch.

## :books: Funcionalidades:
* <b>Cadastra</b>
* <b>Editar</b>
* <b>Excluir</b>


## :wrench: Habilidades utilizadas:
* HTML;
* JavaScript;
* Manipular de Dom;
* Separar documentação js em arquivos separados de acordo com funcionalidades, assim facilitando a exportação e importação dos dados;
* Fetch Api para consumir a URL com os dados que estão no arquivo db.json;


## Implementação futura
-  Segunda parte do projeto consiste em incluir um banco de dado no sistema com Java; 
-  Autentificaçao de usuario no front-end

## Execução direto na maquina
abrir a pasta petshot no vscode e 
rodar o json server: 
```js
npx json-server --watch db.json
```
e logo após:
```
Rodar: browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
```
##  Colaboradores
<table>
Daniel Costa 
</table>
