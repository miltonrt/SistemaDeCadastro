<?php
if (isset($_POST) && !empty($_POST)) {
    echo '<pre>';
    print_r($_POST);
    echo '</pre>';
}

$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$senha = $_POST['senha'] ?? '';
$erro = [];

if (empty($email)) {
    $erro[] = "O campo de email é obrigatório!";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erro[] = "O email informado não é válido.";
}

if (empty($senha)) {
    $erro[] = "O campo de senha é obrigatório!";
} elseif (strlen($senha) < 8) {
    $erro[] = "A senha deve ter pelo menos 8 caracteres.";
} elseif (!preg_match('/[A-Z]/', $senha)) {
    $erro[] = "A senha deve conter pelo menos uma letra maiúscula.";
} elseif (!preg_match('/[a-z]/', $senha)) {
    $erro[] = "A senha deve conter pelo menos uma letra minúscula.";
} elseif (!preg_match('/[0-9]/', $senha)) {
    $erro[] = "A senha deve conter pelo menos um número.";
} elseif (!preg_match('/[\W_]/', $senha)) {
    $erro[] = "A senha deve conter pelo menos um caractere especial.";
}

if (empty($erro)) {
    echo "Email e senha validados com sucesso!";
}
?>