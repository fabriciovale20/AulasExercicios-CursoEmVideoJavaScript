function confirmar() {
    var nome = document.getElementById('txtnome').value
    var brin_escolhida = document.getElementsByName('radbri')
    var res = document.getElementById('res')

    if (nome != '' && 
    brin_escolhida[0].checked == true || brin_escolhida[1].checked == true || 
    brin_escolhida[2].checked == true || brin_escolhida[3].checked == true) {
        var brincadeira = ''
        if (brin_escolhida[0].checked) {
            brincadeira = 'Natação'
        } else if (brin_escolhida[1].checked) {
            brincadeira = 'Correr'
        } else if (brin_escolhida[2].checked) {
            brincadeira = 'Amarelinha'
        } else {
            brincadeira = 'Esconde-esconde'
        }

        res.innerHTML = `Olá ${nome}, você escolheu ${brincadeira}.`
    } else {
        alert('[ERRO] Preencha todos os campos')
    }
}