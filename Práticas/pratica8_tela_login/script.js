function entrar() {
    var usuário = document.querySelector('input#usuario').value
    var senha = document.querySelector('input#senha').value
    var res = document.querySelector('div#res')

    if (usuário == 'fabriciovale' && senha == '12345') {
        alert('Login efetuado com sucesso!')
    } else {
        res.style.color = 'red'
        res.style.font = 'normal 10pt Arial'
        res.innerHTML = `Usuário ou senha incorretos`
    }
}