document.getElementById("formCadastro").addEventListener("submit", async function(event) {
    event.preventDefault();

    const usuario = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value
    };

    try {
        const response = await fetch("http://localhost:8080/usuarios", { // URL do seu backend
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "produtos.html"; // redireciona
        } else {
            const erro = await response.json();
            alert("Erro ao cadastrar: " + (erro.message || "Erro desconhecido"));
        }
    } catch (err) {
        alert("Não foi possível conectar ao servidor: " + err.message);
    }
});
