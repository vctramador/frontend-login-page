function validarFormulario() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const message = document.getElementById('message');

    if (!email || !senha) {
        message.textContent = 'Por favor, preencha todos os campos.';
        message.style.color = 'red';
        return;
    }

    message.textContent = 'Login enviado com sucesso!';
    message.style.color = 'green';
}

function redirecionarCadastro() {
    window.location.href = '/cadastro/cadastro.html';
}

function Home() {
    window.location.href = "../home/home.html"
}