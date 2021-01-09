let i = 1
let item = ''

function transicao() {

    let titulo = document.querySelector('h6')
    titulo.classList.add('opacidade')
}

transicao()

function pulo() {

    item = document.querySelector('#item' + i)
    item.classList.add('animacao')
    i++

    setTimeout(() => {
        item.classList.remove('animacao')
    }, 300)

    i = (i > 4 ? 1 : i)
}

setInterval(pulo, 800)  