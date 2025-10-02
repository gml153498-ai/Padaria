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
    const preco = parseFloat(document.querySelector("#item-" + id + " p").innerText.replace("R$ ", "").replace(",", "."));

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
    // Número total de produtos cadastrados
    const totalProdutos = 16; // ajuste conforme o número de produtos no HTML

    for (let i = 1; i <= totalProdutos; i++) {
        const qtd = parseInt(document.getElementById(`qtd-${i}`).textContent);
        if (qtd > 0) {
            comprar(i); // chama a função comprar do seu código
        }
    }

    alert("Todos os produtos selecionados foram adicionados ao carrinho!");
}
// Carregar perfil
function carregarPerfil() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const card = document.getElementById("perfil-card");

    if (usuario) {
        card.innerHTML = `
            <h3>👤 Perfil</h3>
            <p><strong>Nome:</strong> ${usuario.nome}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Telefone:</strong> ${usuario.telefone}</p>
            <a class="btn-perfil" href="cadastro.html">Editar Perfil</a>
        `;
    } else {
        card.innerHTML = `
            <h3>👤 Perfil</h3>
            <p>Nenhum cadastro encontrado.</p>
            <a class="btn-perfil" href="cadastro.html">Cadastrar</a>
        `;
    }
}

// Alternar visibilidade do card
document.getElementById("btnPerfil").addEventListener("click", function(){
    const card = document.getElementById("perfil-card");
    if(card.style.display === "none" || card.style.display === ""){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});

// Chamar ao carregar página
window.onload = carregarPerfil;

