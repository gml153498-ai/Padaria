// Recupera o total do carrinho (salvo no localStorage antes de limpar)
const totalCompra = localStorage.getItem("totalCompra") || 0;
document.getElementById("total-compra").innerText = "R$ " + parseFloat(totalCompra).toFixed(2);

function mostrarPix() {
    document.getElementById("pix-section").style.display = "block";
    document.getElementById("dinheiro-section").style.display = "none";
    document.getElementById("nota-fiscal").style.display = "none";
}

function mostrarDinheiro() {
    document.getElementById("dinheiro-section").style.display = "block";
    document.getElementById("pix-section").style.display = "none";
    document.getElementById("nota-fiscal").style.display = "none";
}

function calcularTroco() {
    const valorPago = parseFloat(document.getElementById("valorCliente").value);
    const total = parseFloat(totalCompra);
    if (isNaN(valorPago) || valorPago < total) {
        document.getElementById("resultadoTroco").innerText = "⚠️ Valor insuficiente!";
        return;
    }
    const troco = valorPago - total;
    document.getElementById("resultadoTroco").innerText = "Troco: R$ " + troco.toFixed(2);
}

function confirmarPagamento(tipo) {
    // Verificar se é pagamento em dinheiro e se o valor é suficiente
    if (tipo === 'Dinheiro') {
        const valorPago = parseFloat(document.getElementById("valorCliente").value);
        const total = parseFloat(totalCompra);

        if (isNaN(valorPago) || valorPago < total) {
            alert("⚠️ Valor insuficiente! Por favor, insira um valor igual ou maior que o total da compra.");
            return;
        }
    }

    // Gerar nota fiscal antes do alerta
    gerarNotaFiscal(tipo);

    alert(`✅ Pagamento via ${tipo} confirmado! Obrigado pela preferência.`);

    // Mostrar a nota fiscal
    document.getElementById("nota-fiscal").style.display = "block";
    document.getElementById("pix-section").style.display = "none";
    document.getElementById("dinheiro-section").style.display = "none";
}

function gerarNotaFiscal(tipoPagamento) {
    // Recupera o carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const total = parseFloat(totalCompra);
    const agora = new Date();

    let htmlNota = `
        <div class="nota-fiscal-content">
            <p><strong>Padaria Medeiros</strong></p>
            <p>CNPJ: 12.345.678/0001-90</p>
            <p>Data: ${agora.toLocaleDateString()} ${agora.toLocaleTimeString()}</p>
            <hr>
            <p><strong>Itens comprados:</strong></p>
            <div class="itens-comprados">
    `;

    // Adiciona cada item do carrinho
    carrinho.forEach(item => {
        const subtotal = item.qtd * item.preco;
        htmlNota += `
            <div class="item-nota">
                <p>${item.qtd}x ${item.nome} - R$ ${subtotal.toFixed(2)}</p>
            </div>
        `;
    });

    htmlNota += `
            </div>
            <hr>
            <p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
            <p><strong>Forma de pagamento:</strong> ${tipoPagamento}</p>
    `;

    // Adiciona informações de troco se for pagamento em dinheiro
    if (tipoPagamento === 'Dinheiro') {
        const valorPago = parseFloat(document.getElementById("valorCliente").value) || total;
        const troco = valorPago - total;
        htmlNota += `
            <p><strong>Valor pago:</strong> R$ ${valorPago.toFixed(2)}</p>
            <p><strong>Troco:</strong> R$ ${troco.toFixed(2)}</p>
        `;
    }

    htmlNota += `
            <hr>
            <p><strong>Obrigado pela preferência! Volte sempre! 🥖</strong></p>
        </div>
    `;

    document.getElementById("detalhes-nota").innerHTML = htmlNota;
}

function finalizar() {
    alert("🎉 Pedido concluído! Obrigado por comprar na Padaria Medeiros.");

    // Limpar carrinho e redirecionar
    localStorage.removeItem("carrinho");
    localStorage.removeItem("totalCompra");
    window.location.href = "produtos.html";
}