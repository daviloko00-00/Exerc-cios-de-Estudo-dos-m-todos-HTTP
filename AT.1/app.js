const express = require('express');
const app = express();
const PORT = 8081;

// Soma via Path Parameter
app.get("/soma/:n1/:n2", (req, res) => {
    try {
        const { n1, n2 } = req.params;

        if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)) {
            return res.status(400).send("Números errados ou não definidos, tente denovo. Caminho não encontrado");
        }

        const soma = parseFloat(n1) + parseFloat(n2);
        return res.status(200).send(`A soma dos números ${n1} + ${n2} é ${soma}`);
    } catch (error) {
        console.error(`Erro ao calcular soma: ${error}`);
        res.status(500).send("Erro ao processar a requisição!");
    }
});

// Multiplicação via Path Parameter
app.get("/multiplicar/:n1/:n2", (req, res) => {
    try {
        const { n1, n2 } = req.params;

        if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)) {
            return res.status(400).send("Números errados ou não definidos, tente denovo. Caminho não encontrado");
        }

        const multiplicar = parseFloat(n1) * parseFloat(n2);
        return res.status(200).send(`A multiplicação dos números ${n1} * ${n2} é ${multiplicar}`);
    } catch (error) {
        console.error(`Erro ao calcular multiplicação: ${error}`);
        res.status(500).send("Erro ao processar a requisição!");
    }
});

// Divisão via Path Parameter
//divisão por 0 é erro
app.get("/dividir/:n1/:n2", (req, res) => {
    try {
        const { n1, n2 } = req.params;

        if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)) {
            return res.status(400).send("Números errados ou não definidos, tente denovo. Caminho não encontrado");
        }

        if (parseFloat(n2) === 0) {
            return res.status(400).send("Erro: divisão por zero não é permitida.");
        }

        const dividir = parseFloat(n1) / parseFloat(n2);
        return res.status(200).send(`A divisão dos números ${n1} e ${n2} é ${dividir}`);
    } catch (error) {
        console.error(`Erro ao calcular divisão: ${error}`);
        res.status(500).send("Erro ao processar a requisição!");
    }
});

// Subtração via Path Parameter
app.get("/subtrair/:n1/:n2", (req, res) => {
    try {
        const { n1, n2 } = req.params;

        if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)) {
            return res.status(400).send("Números errados ou não definidos, tente denovo. Caminho não encontrado");
        }

        const subtrair = parseFloat(n1) - parseFloat(n2);
        return res.status(200).send(`A subtração dos números ${n1} - ${n2} é ${subtrair}`);
    } catch (error) {
        console.error(`Erro ao calcular subtração: ${error}`);
        res.status(500).send("Erro ao processar a requisição!");
    }
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
