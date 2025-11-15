function nomeCompleto() {
    const nome = document.querySelector('#nome');
    const sobrenome = document.querySelector('#sobrenome');
    const conc = document.getElementById('conc');

    const primeiroNome = nome.value;
    const sobreNome = sobrenome.value;

    conc.innerHTML = `${primeiroNome} ${sobreNome}`;
}
