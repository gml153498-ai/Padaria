async function carregarProdutos() {
    const resposta = await fetch("http://localhost:8080/padaria");
    const lista = await resposta.json();

    const container = document.getElementById("lista-produtos");
    container.innerHTML = ""; // limpa

    lista.forEach(produto => {
        container.innerHTML += `
            <div class="produto" id="item-${produto.id}">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h4>${produto.nome}</h4>
                <p>R$ ${produto.preco.toFixed(2)}</p>

                <div class="controle">
                    <button onclick="remover('${produto.id}')">-</button>
                    <span id="qtd-${produto.id}">0</span>
                    <button onclick="adicionar('${produto.id}')">+</button>
                    <button class="comprar" onclick="comprar('${produto.id}')">Adicionar</button>
                </div>
            </div>
        `;
    });
}

// + / - mantidos
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

// Adicionar item ao carrinho
function comprar(id) {
    const qtd = parseInt(document.getElementById("qtd-" + id).innerText);
    const card = document.getElementById("item-" + id);

    const nome = card.querySelector("h4").innerText;
    const preco = parseFloat(card.querySelector("p").innerText.replace("R$ ", "").replace(",", "."));

    if (qtd > 0) {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push({ id, nome, qtd, preco });
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert(`✅ ${qtd}x ${nome} adicionado(s) ao carrinho!`);
        document.getElementById("qtd-" + id).innerText = 0;
    } else {
        alert("⚠️ Escolha ao menos 1 unidade antes de adicionar!");
    }
}

// Adicionar todos
function adicionarTodos() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let adicionou = false;

    document.querySelectorAll(".produto").forEach(produto => {
        const id = produto.id.replace("item-", "");
        const qtd = parseInt(document.getElementById("qtd-" + id).innerText);

        if (qtd > 0) {
            const nome = produto.querySelector("h4").innerText;
            const preco = parseFloat(produto.querySelector("p").innerText.replace("R$ ", "").replace(",", "."));
            carrinho.push({ id, nome, qtd, preco });
            document.getElementById("qtd-" + id).innerText = 0;
            adicionou = true;
        }
    });

    if (adicionou) {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert("🛒 Todos adicionados ao carrinho!");
    } else {
        alert("⚠️ Selecione ao menos 1 produto antes!");
    }
}

// Carrega na tela ao abrir
window.onload = carregarProdutos;
