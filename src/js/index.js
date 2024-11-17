document.getElementById("senha").addEventListener("input", validarForcSenha);
document.getElementById("btCadastro").addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confSenha = document.getElementById("confSenha").value;
    const mensagem = document.getElementById("mensagem");

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
    
    function validarSenha(senha) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
        return regex.test(senha);
    }

    if (!validarEmail(email)) {
        mensagem.style.color = "red";
        mensagem.textContent = "Por favor, insira um e-mail válido!!";
        return;
    }

    if (!validarSenha(senha)) {
        mensagem.style.color = "red";
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial! :(";
        return;
    }

    if (senha === confSenha) {
        mensagem.style.color = "green";
        mensagem.textContent = "Cadastro realizado com sucesso! ;)";
    }else{
        mensagem.style.color = "red";
        mensagem.textContent = "As senhas não conferem! :(";
    }
});

function validarForcSenha() {
    const senha = document.getElementById("senha").value;
    const barra = document.getElementById("forca");
    const mensagemForca = document.getElementById("mensagemForca");

    let forca = 0;

    if (senha.length >= 8) forca++;
    if (/[a-z]/.test(senha)) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/\d/.test(senha)) forca++;
    if (/[@$!%*?&]/.test(senha)) forca++;

    const niveis = ["Muito Fraca", "Fraca", "Média", "Forte", "Muito Forte"];
    const cores = ["red", "orange", "yellow", "blue", "green"];

    barra.style.width = (forca * 20) + "%"; 
    barra.style.backgroundColor = cores[forca - 1] || "red";
    mensagemForca.textContent = niveis[forca - 1] || "Muito Fraca"; 
}