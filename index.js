import axios from "axios";
import * as cheerio from "cheerio";

const url = 'https://www.procyclingstats.com/rankings/me/individual';

async function getData() {
    try {
        const responseRanking = await axios.get(url);
        const html = responseRanking.data;
        const $ = cheerio.load(html);
        const table = $('table.basic');
        console.log('Table HTML:', table.html());
    } catch (error) {
        console.error('Error retrieving the data:', error);
    };

}

getData();