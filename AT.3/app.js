const express = require("express");
const app = express();
const PORT = 8080;


// Rota com query parameters (já feita)
app.get("/calculadora", (req, res) => {
    try {
        const { operacao, numUm, numDois } = req.query;

        const operacoesValidas = ["soma", "subtracao", "multiplicacao", "divisao"];

        if (isNaN(numUm) || isNaN(numDois) || !operacoesValidas.includes(operacao)) {
            return res.status(400).send("ERRO 400. Requisição Mal Feita.");
        }

        let resultado;
        switch (operacao) {
            case "soma":
                resultado = parseFloat(numUm) + parseFloat(numDois);
                break;
            case "subtracao":
                resultado = parseFloat(numUm) - parseFloat(numDois);
                break;
            case "multiplicacao":
                resultado = parseFloat(numUm) * parseFloat(numDois);
                break;
            case "divisao":
                resultado = parseFloat(numUm) / parseFloat(numDois);
                break;
        }

        return res.send(`O resultado da operação ${operacao} entre ${numUm} e ${numDois} é ${resultado}`);

    } catch (error) {
        console.error(`Erro ao apresentar resultado da operação: ${error}`);
        return res.status(500).send("Erro ao processar a requisição");
    }
});

// Rota dinâmica: /operacao/:tipo
app.get("/operacao/:tipo", (req, res) => {
    try {
        const { tipo } = req.params; // operação (soma, subtracao, multiplicacao, divisao)
        const { numUm, numDois } = req.query; // números

        const operacoesValidas = ["soma", "subtracao", "multiplicacao", "divisao"];

        if (isNaN(numUm) || isNaN(numDois) || !operacoesValidas.includes(tipo)) {
            return res.status(400).send("ERRO 400. Requisição Mal Feita.");
        }

        let resultado;
        switch (tipo) {
            case "soma":
                resultado = parseFloat(numUm) + parseFloat(numDois);
                break;
            case "subtracao":
                resultado = parseFloat(numUm) - parseFloat(numDois);
                break;
            case "multiplicacao":
                resultado = parseFloat(numUm) * parseFloat(numDois);
                break;
            case "divisao":
                if (parseFloat(numDois) === 0) {
                    return res.status(400).send("ERRO: Divisão por zero não é permitida.");
                }
                resultado = parseFloat(numUm) / parseFloat(numDois);
                break;
        }

        return res.send(`O resultado da operação ${tipo} entre ${numUm} e ${numDois} é ${resultado}`);

    } catch (error) {
        console.error(`Erro ao processar operação: ${error}`);
        return res.status(500).send("Erro ao processar a requisição");
    }
});



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/operacao`);
});
