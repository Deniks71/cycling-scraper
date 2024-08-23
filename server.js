import app from "./src/index.js";

const PORT = 3000;
//Responsavel por manter um server de pé
app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});
