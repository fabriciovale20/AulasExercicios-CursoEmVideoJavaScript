function confirmar() {
    var nome = document.getElementById('txtnome').value
    var brin_escolhida = document.getElementsByName('radbri')
    var res = document.getElementById('res')

    var brincadeira = ''
    if (brin_escolhida[0].checked) {
        brincadeira = 'Natação'
    }

    res.innerHTML = `Olá ${nome}, você escolheu ${brincadeira}.`
}