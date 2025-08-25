const express = require("express");
const app = express();
const PORT = 8081;
const path = require("path");

app.get("/calculadora", (req, res) => {
    try {
        const { operacao, numUm, numDois } = req.query;

        const operacoesValidas = ["soma", "subtracao", "multiplicacao", "divisao"];

        if (isNaN(numUm) || isNaN(numDois) || !operacoesValidas.includes(operacao)) {
            return res.status(400).send("ERRO 400. Requisição Mal Feita.");
        }
        

        let resultado;

        // sei como fazer via switch case mas preferi ser mais arcaico
        /*switch (operacao) {
            case "soma":
                resultado = n1 + n2;
                return res.send(`A soma de ${n1} + ${n2} é ${resultado}`);
            case "subtracao":
                resultado = n1 - n2;
                return res.send(`A subtração de ${n1} - ${n2} é ${resultado}`);
            case "multiplicacao":
                resultado = n1 * n2;
                return res.send(`A multiplicação de ${n1} * ${n2} é ${resultado}`);
            case "divisao":
                if (n2 === 0) {
                    return res.status(400).send("Erro: divisão por zero não é permitida.");
                }
                resultado = n1 / n2;
                return res.send(`A divisão de ${n1} / ${n2} é ${resultado}`);
            default:
                return res.status(400).send("Operação inválida.");
        }*/
        
        //soma
        if (operacao === "soma") {
            resultado = parseFloat(numUm) + parseFloat(numDois);
            return res.send(`A soma de ${numUm} + ${numDois} é ${resultado}`);
        } 
        //divisão
        else if (operacao === "divisao") {
            resultado = parseFloat(numUm) / parseFloat(numDois);
            return res.send(`A divisão de ${numUm} / ${numDois} é ${resultado}`);
        }
        //Multiplicação
        else if (operacao === "multiplicacao") {
            resultado = parseFloat(numUm) * parseFloat(numDois);
            return res.send(`A multiplicação de ${numUm} * ${numDois} é ${resultado}`);
        }
        //Subtração
        else if (operacao === "subtracao") {
            resultado = parseFloat(numUm) - parseFloat(numDois);
            return res.send(`A subtração de ${numUm} - ${numDois} é ${resultado}`);
        }

    } catch (error) {
        console.error(`Erro ao apresentar resultado da operação: ${error}`);
        return res.status(500).send("Erro ao processar a requisição");
    }
});

// Rota principal "/menu" para abrir o menu
app.get("/calculadora/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/calculadora/menu`);
});
