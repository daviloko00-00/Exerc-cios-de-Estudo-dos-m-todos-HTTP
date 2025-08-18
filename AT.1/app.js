const express = require('express');
const app = express();
const PORT = 8081;


//PATH PARAMETER
// Soma via Path Parameter
 app.get("/soma/:n1/:n2", (req, res)=>{
    try {
        const {n1, n2} = req.params;
    if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)){
        return res.status(400).send(`Números errados ou não definidos, tente denovo. Caminho não encontrado `)
    }
    let soma = parseFloat(n1)+parseFloat(n2)
    
    return res.status(200).send(`A soma dos números ${n1} + ${n2} é ${soma}`)
    
} catch (error) {
    console.error(`erro ao dizer a soma:${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    
}

//Multiplicar via path parameter
});
 app.get("/multiplicar/:n1/:n2", (req, res)=>{
    try {
        const {n1, n2} = req.params;
    if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)){
        return res.status(400).send(`Números errados ou não definidos, tente denovo. Caminho não encontrado `)
    }
    let multiplicar = parseFloat(n1)*parseFloat(n2)

    return res.status(200).send(`A multiplicação dos números ${n1} * ${n2} é ${multiplicar}`)
    
} catch (error) {
    console.error(`erro ao dizer a soma:${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    
}

});

// Dividir via Path Parameter
 app.get("/dividir/:n1/:n2", (req, res)=>{
    try {
        const {n1, n2} = req.params;
    if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)){
        return res.status(400).send(`Números errados ou não definidos, tente denovo. Caminho não encontrado `)
    }
    let dividir = parseFloat(n1)/parseFloat(n2)

    return res.status(200).send(`A divisão dos números ${n1} e ${n2} é ${dividir}`)
    
} catch (error) {
    console.error(`erro ao dizer a soma:${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    
}

});

// Subtrair via Path Parameter
 app.get("/subtrair/:n1/:n2", (req, res)=>{
    try {
        const {n1, n2} = req.params;
    if (n1 == undefined || n2 == undefined || isNaN(n1) || isNaN(n2)){
        return res.status(400).send(`Números errados ou não definidos, tente denovo. Caminho não encontrado `)
    }
    let subtrair = parseFloat(n1)-parseFloat(n2)

    return res.status(200).send(`a subtração dos números ${n1} - ${n2} é ${subtrair}`)
    
} catch (error) {
    console.error(`erro ao dizer a soma:${error}`)
        res.status(500).send("Erro ao processar a requisição!")

    
}

});



//SEMPRE POR ULTIMO
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
