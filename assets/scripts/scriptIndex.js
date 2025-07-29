// usuários, senhas e links de redirecionamento
const users = [
  { cpf: "111.222.333-44", senha: "1234", nome: "Murilo Thomé" },
  { cpf: "123.456.789-01", senha: "abc123", nome: "João da Silva" },
  { cpf: "987.654.432-10", senha: "senha456", nome: "Maria Oliveira" },
];

// mascara de inputs do cpf, ajeita o resultado na estrutura certa
$(document).ready(function(){
    $('#cpf').mask('000.000.000-00');
});

    // esse código marca o botão com o $(), e depois diz que a lógica acontece mediante o seu "submit"
    $(".form-section").on("submit", function (event) {
    event.preventDefault(); // impede o recarregamento da página

    const form = document.querySelector(".form-section");
    const paragrafoErro = $("#paragrafoErro");
    const cpfInput = $("#cpf").val().trim();
    // .trim pra tirar os espaços do inicio e fim
    const senhaInput = $("#senha").val();

    const user = users.find(u => u.cpf === cpfInput && u.senha === senhaInput);

    if (user) {
        // Armazena o nome do usuário no localStorage
        // usa o método stringify do JSON pra transformar o objeto do usuário em string
        localStorage.setItem("nome", JSON.stringify(user)); 

        // Redireciona para o painel principal
        window.location.href = "./assets/HTML/painel.html";
    } else {
        // css do paragrafo de erro
        paragrafoErro.hide()
        paragrafoErro.text("Usuário não encontrado, tente novamente!")
        paragrafoErro.css({
            "color":"#fc2222ff",
            "font-size":"120%",
            "padding":"10px",
            "font-weight":"bold",
            "margin":"10px"
        })
        paragrafoErro.fadeIn(600);
        form.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

        // limpa os inputs
        $("#cpf").val("");
        $("#senha").val("");
    }
});