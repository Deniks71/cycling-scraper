import axios from "axios";
import * as cheerio from "cheerio";

const url = 'https://www.procyclingstats.com/rankings/me/individual';

async function getData() {
    try {
        const responseRanking = await axios.get(url);
        const html = responseRanking.data;
        const $ = cheerio.load(html);
        const rows = $('table.basic tbody tr');

        for (let i = 0; i < 11 ; i++) {
            let specifcRow = rows.eq(i)
            console.log(specifcRow.html())
        }

    } catch (error) {
        console.error('Error retrieving the data:', error);
    };
}

getData();

