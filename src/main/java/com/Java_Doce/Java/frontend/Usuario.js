document.getElementById("formUsuario").addEventListener("submit", async function (e) {
    e.preventDefault();

    const usuario = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value
    };

    try {
        const response = await fetch("http://localhost:8081/usuario", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        });

        if (response.status === 201) {
            alert("✅ Usuário cadastrado com sucesso!");
            // Redireciona para produtos
            window.location.href = "produtos.html";
        } else {
            alert("⚠️ Erro ao cadastrar usuário.");
        }
    } catch (error) {
        alert("⚠️ Erro de conexão com o servidor.");
        console.error(error);
    }
});

