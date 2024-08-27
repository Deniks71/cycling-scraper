# Cycling Scraper
O propósito desse projeto é colher dados a respeito do o ranking geral Individual da UCI( União Ciclística Internacional) assim como também colher o resultado das ultimas corridas World Tour previamente agendadas.

## Descrição do Projeto
Nesse projeto primeiro deve ser executado o arquivo server.js, pois ele irá "subir o servidor" e possibilita que o servidor nos dê como resposta os dados sobre ciclismo ao qual o programa se propõe a entregar.
O plano final é para criar uma Newsletter ou algum tipo de report com frequência a ser definidade, para poder visualizar esses dados de uma forma mais comoda e com minimo esforço, seja por newsletter ou mensagem por algum meio de comunicação(Whatsapp, Discord e etc).

## Pré Requisitos
Ter Instalado o NodeJS em sua máquina.
Assim como também instalar as dependeências que estarão no repositório a seguir.

## Clone do repositório
https://github.com/Deniks71/cycling-scraper.git
Para instalar, abra a pasta clonada na sua IDE favorita, e rode o comando NPM install, que ele irá instalar todas as dependências necessárias.

## Explicação dos arquivos
O arquivo index.js é onde estão sendo chamadas as bibliotecas utilizadas no projeto além do setup inicial das mesmas. Também nesse mesmo arquivo, estão duas funções assincronas, uma que retorna os resultados das corridas World Tour do ano, e outra que retorna o ranking mundial individual dos atletas, a quantidade apresentada nesse ranking é passada por route parameter.
EX: Se você quer mostrar os 15 primeiros do ranking deverar passar a seguinte url: 
"/cycling/individualranking/15", as repostas da requisição será em forma de JSON.

O arquivo routes.js, é onde estão configuradas as nossas rotas.

E o arquivo server.js é o arquivo que deve ser rodado primeiro no nosso programa, pois ele é o responsável por manter o servidor de "pé".
