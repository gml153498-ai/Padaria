
    document.getElementById("formCadastro").addEventListener("submit", async function(event) {
    event.preventDefault();

    const usuario = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    dataNascimento: document.getElementById("dataNascimento").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value
};


});

    document.getElementById("formCadastro").addEventListener("submit", async function(event) {
        event.preventDefault();

        const usuario = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            dataNascimento: document.getElementById("dataNascimento").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value
        };
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


    });

