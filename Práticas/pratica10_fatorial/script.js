function fatorial() {
    let n = document.querySelector('input#txtn')
    let res = document.querySelector('div#res')

    if (n.value.length != 0) {
        let numero = Number(n.value)
        res.innerHTML = ``

        let fat = 1
        for (var c = numero; c > 1; c--)
            fat *= c
        res.innerHTML = `Fatorial de ${numero} é igual a ${fat}`
    } else {
        alert('[ERRO] Informe um número válido')
    }
}