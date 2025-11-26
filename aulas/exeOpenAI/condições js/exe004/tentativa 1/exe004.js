function login() {
    let usuario = document.querySelector('#user').value
    let senha = document.querySelector('#password').value
    let resultado = document.getElementById('resultado')

    if (usuario == 'fernandovelosomkt@gmail.com' && senha == '12345') {
        resultado.innerHTML = `Login realizado!`
    } else if (usuario != 'fernandovelosomkt@gmail.com' && senha == '12345') {
        resultado.innerHTML = `Usuário incorreto!`
    } else if (usuario == 'fernandovelosomkt@gmail.com' && senha != '12345') {
        resultado.innerHTML = `Senha incorreta!`
    } else {
        resultado.innerHTML = `Usuário e senha incorretos!`
    }
}