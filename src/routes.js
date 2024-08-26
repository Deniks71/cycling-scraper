import { Router } from "express";
import { getRaceResults,getIndividualRanking } from "./index.js";

const router = Router();

router.get('/', async (req,res) => {
    try{
        let resultado = await getRaceResults();
       
        res.json(resultado)
    } catch(error) {
        res.send(`Ocorreu um erro ${error}`)
    }
    
})






export default router