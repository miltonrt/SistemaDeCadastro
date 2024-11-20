const filtroSenha = document.getElementById('senha');
const exibirSenha = document.getElementById('btSenha');

exibirSenha.addEventListener('click', () => {
    const type = filtroSenha.type === 'password' ? 'text' : 'password';
    filtroSenha.type = type;
    const senhaIc = document.createElement('img');

    if (type === 'password') {
        senhaIc.src = 'src/img/passClosed.png'; 
    } else {
        senhaIc.src = 'src/img/passOpen.png';
    }

    exibirSenha.textContent = '';
    exibirSenha.appendChild(senhaIc);
});

const filtroConfSenha = document.getElementById('confSenha'); 
const exibirConfSenha = document.getElementById('btConfSenha');

exibirConfSenha.addEventListener('click', () => {
    const type = filtroConfSenha.type === 'password' ? 'text' : 'password';
    filtroConfSenha.type = type;
    const senhaIc = document.createElement('img');

    if (type === 'password') {
        senhaIc.src = 'src/img/passClosed.png'; 
    } else {
        senhaIc.src = 'src/img/passOpen.png';
    }

    exibirConfSenha.textContent = '';
    exibirConfSenha.appendChild(senhaIc);
});