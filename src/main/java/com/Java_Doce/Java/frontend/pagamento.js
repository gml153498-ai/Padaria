// Recupera o total do carrinho (salvo no localStorage antes de limpar)
const totalCompra = localStorage.getItem("totalCompra") || 0;
document.getElementById("total-compra").innerText = "R$ " + parseFloat(totalCompra).toFixed(2);

function confirmarPagamento(tipo) {
    alert(`✅ Pagamento via ${tipo} confirmado! Obrigado pela preferência.`);
    finalizar();
}

function mostrarPix() {
    document.getElementById("pix-section").style.display = "block";
    document.getElementById("dinheiro-section").style.display = "none";
}

function mostrarDinheiro() {
    document.getElementById("dinheiro-section").style.display = "block";
    document.getElementById("pix-section").style.display = "none";
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

function finalizar() {
    alert("🎉 Pedido concluído! Obrigado por comprar na Padaria Medeiros.");
    window.location.href = "produtos.html";
}
