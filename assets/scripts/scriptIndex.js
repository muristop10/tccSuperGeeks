// usuários, senhas e informações financeiras
const users = [
  {
    cpf: "111.222.333-44",
    senha: "1234",
    nome: "Murilo Thomé",
    salario: 8500.00,
    despesasMensais: 3200.50,
    totalCompras: 1500.75,
    contas: {
      luz: 220.30,
      agua: 130.00,
      internet: 110.00,
      aluguel: 1800.00,
      gasolina: 400.00
    },
    investimentos: {
      poupanca: 5000.00,
      rendaFixa: 12000.00,
      acoes: 3500.00
    }
  },
  {
    cpf: "123.456.789-01",
    senha: "abc123",
    nome: "Juliano Thomé",
    salario: 6700.00,
    despesasMensais: 4100.00,
    totalCompras: 2340.90,
    contas: {
      luz: 190.20,
      agua: 145.75,
      internet: 120.00,
      aluguel: 1700.00,
      gasolina: 380.00
    },
    investimentos: {
      poupanca: 2000.00,
      rendaFixa: 3000.00,
      acoes: 750.00
    }
  },
  {
    cpf: "987.654.432-10",
    senha: "senha456",
    nome: "Karolina Victória",
    salario: 9400.00,
    despesasMensais: 5000.00,
    totalCompras: 3250.00,
    contas: {
      luz: 210.00,
      agua: 160.00,
      internet: 100.00,
      aluguel: 1850.00,
      gasolina: 420.00
    },
    investimentos: {
      poupanca: 10000.00,
      rendaFixa: 5000.00,
      acoes: 6000.00
    }
  }
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

    //verificação, compara os dados do login com os dados de cada user da lista
    const user = users.find(u => u.cpf === cpfInput && u.senha === senhaInput);

    if (user) {
        // armazena o nome do usuário no localStorage
        // usa o método stringify do JSON pra transformar o objeto do usuário em string
        localStorage.setItem("User", JSON.stringify(user)); 

        // redireciona para o painel principal
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

        // tempo de 5 segundos pra sumir
        setTimeout(() => {paragrafoErro.fadeOut(600)}, 5000); 
    }
});
