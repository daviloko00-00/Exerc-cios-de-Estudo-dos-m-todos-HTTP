const express = require("express");
const app = express();
const PORT = 8081;

// PATH PARAMETER
app.get("/ano/:ano", (req, res) => {
    try {
        const ano = parseInt(req.params.ano);

        if (isNaN(ano)) {
            return res.status(400).send("Número Inválido / Caminho mal formado");
        }

        if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
            return res.status(200).send(`O ano ${ano} é bissexto`);
        } else {
            return res.status(200).send(`O ano ${ano} NÃO é bissexto`);
        }

    } catch (error) {
        console.error(`Erro ao processar ano: ${error}`);
        return res.status(500).send("Erro ao processar a requisição");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/ano/`);
});
