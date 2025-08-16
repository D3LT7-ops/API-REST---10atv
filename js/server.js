const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 3000;

const apiKey = "f4EPliXYJEFj6GqPj8tGWDhJ";
const urlBase = `https://api.bestbuy.com/v1/products?format=json&pageSize=10&show=sku,name,salePrice,image&apiKey=${apiKey}`;

app.use(cors());

// Rota que busca na API e retorna para o navegador
app.get("/produtos", async (req, res) => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        res.status(500).json({ error: "Erro no servidor" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
