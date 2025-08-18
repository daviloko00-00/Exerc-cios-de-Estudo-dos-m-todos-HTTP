const express = require("express");
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res) => {
    try {
        const nome = req.params.nome;                // Path param
        const hora = Number(req.query.hora);         // Query param convertido em número

        // validações
        if (!nome || !isNaN(nome)) {
            return res.status(400).send("Nome inválido!");
        }
        if (isNaN(hora) || hora < 0 || hora > 23) {
            return res.status(400).send("Hora inválida! Use valores de 0 a 23.");
        }

        let saudacao = "";
        if (hora >= 6 && hora < 12) {
            saudacao = "Bom dia";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "Boa tarde";
        } else {
            saudacao = "Boa noite";
        }

        res.send(`<h1>${saudacao}, ${nome}!</h1>`);

    } catch (error) {
        res.status(500).send("Erro interno no servidor");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
