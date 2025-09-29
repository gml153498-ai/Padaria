function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let lista = document.getElementById("listaCarrinho");
    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    let total = 0;

    carrinho.forEach((produto, index) => {
        let li = document.createElement("li");

        // Acesse o nome e preço do produto
        let nomeProduto = produto.nome; // ou produto.nome se for o nome da propriedade
        let precoProduto = produto.preco; // ou produto.preco se for o preço da propriedade

        // Exiba o nome e o preço corretamente
        li.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2)} `;

        let btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = function() {
            removerProduto(index);
        };

        li.appendChild(btnRemover);
        lista.appendChild(li);

        // Adiciona ao total
        total += precoProduto;
    });

    // Exibe o total da compra
    let totalElement = document.createElement("p");
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    lista.appendChild(totalElement);
}
