// Quando o formulário for enviado
document.getElementById("formCadastro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Pega os valores dos campos
    const usuario = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value
    };

    // Salva os dados no localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Mostra uma mensagem de sucesso
    alert("Cadastro realizado com sucesso!");

    // Redireciona para a página de produtos
    window.location.href = "produtos.html";
});
document.getElementById("formUsuario").addEventListener("submit", async function(e) {
    e.preventDefault();

    const usuario = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value
    };

    try {
        const response = await fetch("http://localhost:8080/usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        });

        if (response.ok) { // 200-299
            alert("✅ Usuário cadastrado com sucesso!");
            window.location.href = "produtos.html";
        } else {
            const errorData = await response.json();
            alert("⚠️ Erro ao cadastrar: " + (errorData.message || "Erro desconhecido"));
        }
    } catch (error) {
        alert("⚠️ Erro de conexão com o servidor.");
        console.error(error);
    }
});
