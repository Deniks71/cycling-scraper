# Cycling Scraper
O propósito desse projeto é colher dados a respeito do o ranking geral Individual da UCI( União Ciclística Internacional) assim como também colher o resultado das ultimas corridas World Tour previamente agendadas.

## Descrição do Projeto
Nesse projeto ao executar as funções "getIndividualRanking()" e "getRaceResults()", são retornados o ranking individual geral e os resultados das principais corridas no ano. 
O plano final é para criar uma Newsletter ou algum tipo de reporte com frequência a ser definidade, para poder visualizar esses dados de uma forma mais comoda e com minimo esforço, seja por newsletter ou mensagem por algum meio de comunicação(Whatsapp, Discord e etc).

## Pré Requisitos
Ter Instalado o NodeJS em sua máquina.
Assim como também instalar as dependeências que estarão no repositório a seguir.

## Clone do repositório
https://github.com/Deniks71/cycling-scraper.git
Para instalar, abra a pasta clonada na sua IDE favorita, e rode o comando NPM install, que ele irá instalar todas as dependências necessárias.

## Explicação dos arquivos
Até então toda a funcionalidade do codigo está dentro da pasta "src" dentro do arquivo "index.js". 
Lá tem duas Funções assincronas, citadas no começo dessa readme, basta realizar a chamada das mesmas, e ela irá retornar os resultados no qual elas se propoem a buscar.
