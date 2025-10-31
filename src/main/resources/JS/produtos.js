// produtos.js

function adicionar(id) {
    const qtd = document.getElementById("qtd-" + id);
    qtd.innerText = parseInt(qtd.innerText) + 1;
}

function remover(id) {
    const qtd = document.getElementById("qtd-" + id);
    if (parseInt(qtd.innerText) > 0) {
        qtd.innerText = parseInt(qtd.innerText) - 1;
    }
}

function comprar(id) {
    const qtd = parseInt(document.getElementById("qtd-" + id).innerText);
    const nome = document.querySelector("#item-" + id + " h4").innerText;
    const preco = parseFloat(
        document.querySelector("#item-" + id + " p").innerText.replace("R$ ", "").replace(",", ".")
    );

    if (qtd > 0) {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push({ nome: nome, qtd: qtd, preco: preco });
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert(`✅ ${qtd}x ${nome} adicionado(s) ao carrinho!`);
        document.getElementById("qtd-" + id).innerText = 0;
    } else {
        alert("⚠️ Escolha ao menos 1 unidade antes de adicionar!");
    }
}

function adicionarTodos() {
    const produtos = document.querySelectorAll(".produto");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let adicionou = false;

    produtos.forEach(produto => {
        const id = produto.id.split("-")[1];
        const qtd = parseInt(document.getElementById("qtd-" + id).innerText);
        if (qtd > 0) {
            const nome = produto.querySelector("h4").innerText;
            const preco = parseFloat(
                produto.querySelector("p").innerText.replace("R$ ", "").replace(",", ".")
            );
            carrinho.push({ nome: nome, qtd: qtd, preco: preco });
            document.getElementById("qtd-" + id).innerText = 0;
            adicionou = true;
        }
    });

    if (adicionou) {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert("🛒 Todos os produtos foram adicionados ao carrinho!");
    } else {
        alert("⚠️ Selecione ao menos um produto antes de adicionar todos!");
    }
}
