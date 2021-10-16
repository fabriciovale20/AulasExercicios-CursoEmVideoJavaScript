function confirmar() {
    var nome = document.getElementById('txtnome')
    var brin_escolhida = document.getElementsByName('radbri')
    var res = document.getElementById('res')

    if (nome.value.length != 0) {
        var nome = nome.value
        var brincadeira = ''
        var verificador = true

        if (brin_escolhida[0].checked) {
            brincadeira = 'Natação'
        } else if (brin_escolhida[1].checked) {
            brincadeira = 'Correr'
        } else if (brin_escolhida[2].checked) {
            brincadeira = 'Amarelinha'
        } else if (brin_escolhida[3].checked) {
            brincadeira = 'Esconde-esconde'
        } else {
            alert('[ERRO] Escolha uma brincadeira.')
            verificador = false
        }

        if (verificador == true) {
            res.innerHTML = `Olá ${nome}, você escolheu ${brincadeira}.`
        }
    } else {
        alert('[ERRO] Preencha o nome.')
    }
}