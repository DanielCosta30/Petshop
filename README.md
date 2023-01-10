


<h1 align="center">:file_cabinet: Projeto Petshop</h1>

<br></br>
<h2>Produtos</h2>

## ![Produtos](https://user-images.githubusercontent.com/81030386/210096768-1a7d0505-76b5-4297-94b6-164117b95673.jpeg)
<h2>Clientes</h2>

## ![Clientes](https://user-images.githubusercontent.com/81030386/210096893-e7af0c3d-9a0b-4322-a4d5-ec64ff5b0fee.jpeg)
<h2>Agendamentos</h2>

## ![Agendamentos](https://user-images.githubusercontent.com/81030386/210097000-6be4531e-6adb-4ab0-862d-41b08d35f7f4.jpeg)

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
