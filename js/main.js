const apiKey = "f4EPliXYJEFj6GqPj8tGWDhJ";

const urlBase = "http://localhost:3000/produtos";


// GET
async function listarProdutos() {
    const container = document.getElementById("produtos");
    container.innerHTML = "Carregando...";
    try {
        const res = await fetch(urlBase);
        const data = await res.json();

        if (!data.products || data.products.length === 0) {
            container.innerHTML = "Nenhum produto encontrado.";
            return;
        }

        container.innerHTML = "";
        data.products.forEach(produto => {
            container.innerHTML += `
                <div class="produto">
                    <img src="${produto.image}" alt="${produto.name}" style="width:150px;">
                    <h3>${produto.name}</h3>
                    <p>Preço: $${produto.salePrice}</p>
                    <small>ID: ${produto.sku}</small>
                </div>
            `;
        });
    } catch (err) {
        container.innerHTML = "Erro ao carregar produtos.";
        console.error("Erro na requisição:", err);
    }
}

// POST (fake)
async function adicionarProduto(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, preco })
    });

    if (res.ok) {
        alert("Produto adicionado com sucesso!");
    }
}

// DELETE (fake)
async function deletarProduto(e) {
    e.preventDefault();
    const id = document.getElementById("idProduto").value;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    });

    if (res.ok) {
        alert("Produto excluído com sucesso!");
    }
}
