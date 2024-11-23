// document.getElementById("btCadastro").addEventListener("click", function () {
//     // Captura os valores dos campos
//     const nome = document.getElementById("nome").value;
//     const sobrenome = document.getElementById("sobrenome").value;
//     const senha = document.getElementById("senha").value;

//     // Cria um objeto com os dados
//     const dados = { nome: nome, sobrenome: sobrenome, senha: senha };

//     // Simulação de envio e resposta usando AJAX (fetch API)
//     fetch('https://jsonplaceholder.typicode.com/posts', { // URL fictícia para simulação
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dados), // Envia os dados no corpo da requisição
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Exibe os dados no campo de output
//             const outputDiv = document.getElementById("output");
//             outputDiv.innerHTML = `<p><strong>Nome:</strong> ${data.nome}</p>
//                                    <p><strong>Sobrenome:</strong> ${data.sobrenome}</p>
//                                    <p><strong>Senha:</strong> ${data.senha}</p>`;
//         })
//         .catch(error => {
//             console.error('Erro:', error);
//         });
// });







const btnCadastro = document.getElementById("btCadastro");
const outputDiv = document.getElementById("output");
const senha = document.getElementById("senha").value;


btnCadastro.addEventListener("click", function () {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const senha = document.getElementById("senha").value.trim();


    if (!nome || !sobrenome) {
        outputDiv.style.display = "block";
        outputDiv.innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos!</p>";
        return;
    }

    outputDiv.style.display = "block";
    outputDiv.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Sobrenome:</strong> ${sobrenome}</p>
        <p><strong>Senha:</strong> ${senha}</p>
    `;

    // document.getElementById("nome").value = "";
    // document.getElementById("sobrenome").value = "";
});



// // Seleciona os elementos do DOM
// const btnCadastro = document.getElementById("btCadastro");
// const outputDiv = document.getElementById("output");

// // Adiciona um evento de clique ao botão
// btnCadastro.addEventListener("click", function (event) {
//     // Evita a atualização da página
//     event.preventDefault();

//     // Captura os valores dos campos
//     const nome = document.getElementById("nome").value.trim();
//     const sobrenome = document.getElementById("sobrenome").value.trim();

//     // Verifica se os campos foram preenchidos
//     if (!nome || !sobrenome) {
//         outputDiv.style.display = "block"; // Exibe a div para mostrar a mensagem
//         outputDiv.innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos!</p>";
//         return;
//     }

//     // Exibe os dados no elemento de saída e torna a div visível
//     outputDiv.style.display = "block"; // Exibe a div
//     outputDiv.innerHTML = `
//         <p><strong>Nome:</strong> ${nome}</p>
//         <p><strong>Sobrenome:</strong> ${sobrenome}</p>
//     `;
// });






// // Seleciona os elementos do DOM
// const btnCadastro = document.getElementById("btCadastro");
// const formCadastro = document.getElementById("formCadastro");
// const outputDiv = document.getElementById("output");

// // Adiciona um evento de clique ao botão
// btnCadastro.addEventListener("click", function (event) {
//     // Evita a atualização da página
//     event.preventDefault();

//     // Captura os valores dos campos
//     const nome = document.getElementById("nome").value.trim();
//     const sobrenome = document.getElementById("sobrenome").value.trim();

//     // Verifica se os campos foram preenchidos
//     if (!nome || !sobrenome) {
//         outputDiv.innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos!</p>";
//         return;
//     }

//     // Exibe os dados no elemento de saída
//     outputDiv.innerHTML = `
//         <p><strong>Nome:</strong> ${nome}</p>
//         <p><strong>Sobrenome:</strong> ${sobrenome}</p>
//     `;
// });



