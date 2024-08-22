import axios from "axios";
import * as cheerio from "cheerio";

//URL for the page where contains the individual world ranking.
const url = 'https://www.procyclingstats.com/rankings/me/individual';
let individualRanking = [];

async function getData() {
    try {
        //Gets the response of the page using the method axios.get() to retrieve all the data in that page
        const responseRanking = await axios.get(url);
        
        //Declaring a new const to put only the html that was received un the response.
        const html = responseRanking.data;

        //loading the html with cheerio
        const $ = cheerio.load(html);

        //Selecting the rows using the html element and the css class
        const rows = $('table.basic tbody tr');

        for (let i = 0; i < 10 ; i++) {
            const specifcRow = rows.eq(i)
            individualRanking.push({
                Position: specifcRow.find('td').eq(0).text().trim(),
                Name: specifcRow.find('td').eq(3).text().trim(),
                Team: specifcRow.find('td').eq(4).text().trim(),
                Points: specifcRow.find('td').eq(5).text().trim(),
            })
        }

        console.log(individualRanking)
    } catch (error) {
        console.error('Error retrieving the data:', error);
    };
}

getData();

