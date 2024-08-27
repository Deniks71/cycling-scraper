import { Router } from "express";
import { getRaceResults,getIndividualRanking } from "./index.js";

const router = Router();

router.get('/cycling/raceresults', async (req,res) => {
    try{
        let resultado = await getRaceResults();
       
        res.json(resultado)
    } catch(error) {
        res.send(`Ocorreu um erro ${error}`)
    }
    
})

router.get('/cycling/individualranking', async (req,res) => {
    try{
        let resultado = await getIndividualRanking(20);
       
        res.json(resultado)
    } catch(error) {
        res.send(`Ocorreu um erro ${error}`)
    }
    
})

//Configurando route parameter.
//Com isso ao digitar um numero no final da url -> 
//->é possivel escolher a qntidade de atletas que será retornada
router.get('/cycling/individualranking/:range', async (req,res) => {
    try{
        let resultado = await getIndividualRanking(req.params.range);
       
        res.json(resultado)
    } catch(error) {
        res.send(`Ocorreu um erro ${error}`)
    }
    
})






export default router