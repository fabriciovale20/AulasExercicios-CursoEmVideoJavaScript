function tabuada() {
    let numero = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        
        tab.innerHTML = ``

        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option') // Cria um option dentro do select

            item.text += `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` // Para saber o item que foi selecionado, serve bastante para PHP
            tab.appendChild(item)
        }
    }
}