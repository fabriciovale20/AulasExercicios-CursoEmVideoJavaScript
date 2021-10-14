var tentativas = 3
var numero = 5

function verificar() {
    var n = Number(document.querySelector('input#txtn').value)
    var res = document.querySelector('div#res')

    if (tentativas > 1 || n == numero) {
        if (n != numero) {
            tentativas --
            res.innerHTML = `Tente novamente, você tem ${tentativas} tentativa(s) restante(s).`
        } else {
            res.innerHTML = `Você acertou!`
        }
    } else {
        res.innerHTML = `Tentativas esgotadas, desculpe.`
    }
}
