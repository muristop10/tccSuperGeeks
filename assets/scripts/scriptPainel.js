// PAINEL
// evento que inicia assim que  apagina carregar
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("User")); // recupera e converte de volta para objeto
    const titulo = document.querySelector("#tituloNome");

    if (user) {
        titulo.textContent = `Bem-vindo, ${user.nome}!`;

    } else {
        // Se não houver usuário salvo, redireciona para login
        window.location.href = "../../index.html";
    }

    // Botão "Voltar" pode virar "Sair"
    const botaoVoltar = document.querySelector("#botaoVoltarLogin a");
    // quando o botao de voltar for clicado
    botaoVoltar.addEventListener("click", () => {
        localStorage.removeItem("User"); // remove os dados
    });
});