import axios from "axios";

const url = 'https://www.procyclingstats.com/rankings.php';

async function getData() {
    try {
        const responseRanking = await axios.get(url);
        console.log(responseRanking.data);
    } catch (error) {
        console.error('Error retrieving the data:', error);
    };
}

getData();