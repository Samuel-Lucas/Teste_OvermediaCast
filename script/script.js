let i = 1
let item = ''
let titulo = document.querySelector('h6')
titulo.classList.add('opacidade')
titulo.style.visibility = 'visible'

setTimeout(transicaoItens, 500)
    
function transicaoItens() {
    item = document.querySelector('#item' + i)
    item.classList.add('opacidade')
    item.style.visibility = 'visible'
    i++

    if(i < 5) {
        setTimeout(transicaoItens, 250)
    } else {
        i = 1
        setInterval(pulo, 500)
    }
}

function pulo() {

    item = document.querySelector('#item' + i)
    item.classList.remove('opacidade')
    item.classList.add('animacao')
    i++

    setTimeout(() => {
        item.classList.remove('animacao')
    }, 400)

    if(i > 4) {
        setTimeout(() => {
            i = 1
        }, 1500)
    } else {
        i = i
    }
}

