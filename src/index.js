import axios from "axios";
import * as cheerio from "cheerio";
import express from "express";
import routes from "./routes.js"

//configurando express no projeto
const app = express();
app.use(express.json());

//o app use routes tem que ser chamado após o app use json
app.use(routes)


export async function getIndividualRanking(limite = 10) {
    //Url de onde serão retirados os dados.
    const url = 'https://www.procyclingstats.com/rankings/me/individual';
    let individualRanking = [];

    try {
        //Pega o response contendo os dados contidos na url buscada(o axios é o responsavel por fazer a requisição).
        const responseRanking = await axios.get(url);
        
        //Declarando uma constante onde serão armazenados somente o html retirados do response obtido.
        const html = responseRanking.data;

        //Carregando HTML com o Cheerio
        const $ = cheerio.load(html);

        //Selecionando as linhas da tabela
        const rows = $('table.basic tbody tr');

        //Nesse caso foi colocado o valor de 10, pois só quero os 10 primeiros do ranking(porém isso pode ser alterado a qualquer momento)
        for (let i = 0; i < limite ; i++) {
            //Realiza looping para armazenar os dados de cada linha
            const specifcRow = rows.eq(i)
            individualRanking.push({
                //Através de um metodo erdado do JQUERY ".find", está sendo achado cada celula desejada na linha e armazenados em um objeto e inseridos em um array.
                Position: specifcRow.find('td').eq(0).text().trim(),
                Name: specifcRow.find('td').eq(3).text().trim(),
                Team: specifcRow.find('td').eq(4).text().trim(),
                Points: specifcRow.find('td').eq(5).text().trim(),
            });
        };

        return individualRanking;
    } catch (error) {
        console.error('Error retrieving the data:', error);
    };
};

// O codigo a seguir é bastante similar ao anterior
export async function getRaceResults() {
    const url = 'https://www.procyclingstats.com/races.php';
    let raceResults = [];

    try {
        const responseRaceResults = await axios.get(url);
        const html = responseRaceResults.data;
        
        const $ = cheerio.load(html);
        const rows = $('table.basic tbody tr');
        
        for (let i = 0; i < rows.length; i++) {
            const specifcRow = rows.eq(i);

            raceResults.push({
                Date: specifcRow.find('td').eq(0).text().trim(),
                Race: specifcRow.find('td').eq(2).text().trim(),
                Winner: specifcRow.find('td').eq(3).text().trim(),
                Class: specifcRow.find('td').eq(4).text().trim()
            });
        };

        return raceResults;
    

    } catch(error){
        console.error('Error retrieving the data:', error);
    };

};


export default app;

