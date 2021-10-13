function confirmar() {
    var nome = document.querySelector('input#txtnome').value
    var brin_escolhida = document.getElementsByName('radbri')
    var res = document.querySelector('div#res')
    if (nome == '') {
        window.alert('[ERRO] Preencha o nome')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (brin_escolhida[0].checked) {
            brincadeira = 'Esconde-esconde'
            img.setAttribute('src', 'esconde.png')
        } else if (brin_escolhida[1].checked) {
            img.setAttribute('src', 'amarelinha.png')
            brincadeira = 'Amarelinha'
        } else if (brin_escolhida[2].checked) {
            brincadeira = 'Correr'
            img.setAttribute('src', 'correr.png')
        } else {
            brincadeira = 'Natação'
            img.setAttribute('src', 'natacao.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Olá ${nome}! Você escolheu a brincadeira ${brincadeira}.`
        res.appendChild(img)
    }
}