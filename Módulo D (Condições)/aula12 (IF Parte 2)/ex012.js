var agora = new Date() // Pega a data atual completa
var hora = agora.getHours() // Pega apenas a hora

console.log(`Agoa são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}