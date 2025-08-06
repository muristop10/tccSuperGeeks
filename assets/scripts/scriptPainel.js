//assim que a pagina for carregada
document.addEventListener("DOMContentLoaded", () => {
    // sao recebidas as informações do user do local storage
    const user = JSON.parse(localStorage.getItem("User"));
    // variavel pra definir o titulo onde sera mostrado o nome
    const titulo = document.querySelector("#tituloNome");
    const pLuz= document.querySelector("#pLuz");
    const pAgua= document.querySelector("#pAgua");
    const pInternet= document.querySelector("#pInternet");
    const pAluguel= document.querySelector("#pAluguel");
    const pGasolina= document.querySelector("#pGasolina");

    // caso os dados do usuarios nao sejam passados devidamente pra pagina
    if (!user) {
        alert("Falha no login!")
        window.location.href = "../../index.html";
        return;
    }

    // preenchimento de campos
    titulo.textContent = `Bem-vindo, ${user.nome}!`;
    pLuz.textContent = `Despesas com luz: R$ ${user.contas.luz}`
    pAgua.textContent = `Despesas com água: R$ ${user.contas.agua}`
    pInternet.textContent = `Despesas com internet: R$ ${user.contas.internet}`
    pAluguel.textContent = `Despesas com aluguel: R$ ${user.contas.aluguel}`
    pGasolina.textContent = `Despesas com gasolina: R$ ${user.contas.gasolina}`



    
    // sair da conta
    const botaoVoltar = document.querySelector("#botaoVoltarLogin a");
    botaoVoltar.addEventListener("click", () => {
        localStorage.removeItem("User");
    });

    // gráfico do salario
    new Chart(document.getElementById("graficoSalario"), {
        type: "bar",
        data: {
        labels: ["Salário"],
        datasets: [{
            label: "Salário (R$)",
            data: [user.salario],
            backgroundColor: "rgba(75, 192, 192, 0.7)"
        }]
        },
        options: {
        responsive: true,
        indexAxis: 'y',
        scales: { x: { beginAtZero: true } }
        }
    });

    // grafico das despesas
    new Chart(document.getElementById("graficoDespesas"), {
        type: "bar",
        data: {
        labels: ["Despesas"],
        datasets: [{
            label: "Despesas (R$)",
            data: [user.despesasMensais],
            backgroundColor: "rgba(255, 99, 132, 0.7)"
        }]
        },
        options: {
        responsive: true,
        indexAxis: 'y',
        scales: { x: { beginAtZero: true } }
        }
    });

    // grafico dos investimentos
    const investimentos = user.investimentos;
    new Chart(document.getElementById("graficoInvestimentos"), {
        type: "pie",
        data: {
        labels: ["Poupança", "Renda Fixa", "Ações"],
        datasets: [{
            label: "Investimentos (R$)",
            data: [
            investimentos.poupanca,
            investimentos.rendaFixa,
            investimentos.acoes
            ],
            backgroundColor: [
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(153, 102, 255, 0.7)"
            ]
        }]
        },
    });
});
