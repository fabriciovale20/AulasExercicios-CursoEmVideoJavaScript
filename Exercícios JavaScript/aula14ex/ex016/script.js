function contar() {
    var inicio = Number(document.querySelector('input#txti').value)
    var fim = Number(document.querySelector('input#txtf').value)
    var passo = Number(document.querySelector('input#txtp').value)
    var res = document.querySelector('div#res')

    if (inicio == fim == passo == '') {
        res.innerHTML = `Impossível contar!`
    } else if (passo == '') {
        window.alert(`Passo inválido! Considerando PASSO 1.`)
        passo = 1
    } else {
        
    }
}