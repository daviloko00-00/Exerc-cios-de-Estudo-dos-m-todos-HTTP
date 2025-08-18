const express = require('express');
const app = express();
const PORT = 8081;

app.get('/imc', (req, res) => {
    try {
        const peso = parseFloat(req.query.peso); // Query param convertido em número
        const altura = parseFloat(req.query.altura); // Query param convertido em número

        // validações
        if (isNaN(peso) || peso <= 0) {
            return res.status(400).send("Peso inválido! Deve ser um número positivo.");
        }
        if (isNaN(altura) || altura <= 0) {
            return res.status(400).send("Altura inválida! Deve ser um número positivo.");
        }

        const imc = peso / (altura * altura);
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        res.send(`<h1>Seu IMC é: ${imc.toFixed(2)} - Classificação: ${classificacao}</h1>`);

    } catch (error) {
        res.status(500).send("Erro interno no servidor");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});