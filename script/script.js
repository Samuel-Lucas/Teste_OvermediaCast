let i = 1
let item = ''
let titulo = document.querySelector('h6')
let modal = document.querySelector('#modal')


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

        setTimeout(() => {
            for(let j = 1; j <= 4; j++) {
                item = document.querySelector('#item' + j)
                item.classList.remove('opacidade')
            }
        }, 450)
        

        setInterval(pulo, 500)
    }
}

function pulo() {

    item = document.querySelector('#item' + i)
    item.classList.add('animacao')
    i++

    setTimeout(() => {
        item.classList.remove('animacao')
    }, 450)

    if(i > 4) {
        setTimeout(() => {
            i = 1
        }, 1500)
    } else {
        i = i
    }
}

async function showContent(indice) {

    let tituloModal = document.querySelector('#modal h3')
    let imagem = document.querySelector('#modal img')
    let height = document.querySelector('#modal .height')
    let width = document.querySelector('#modal .weight')

    let api_url = 'https://pokeapi.co/api/v2/pokemon/' + indice
    let response = await fetch(api_url)
    let data = await response.json()
    
    modal.style.display = 'block'
    tituloModal.innerHTML = data.name
    tituloModal.style.fontWeight = 'bold'
    imagem.src = data.sprites.front_default
    height.innerHTML = data.height
    width.innerHTML = data.weight
}

function closeModal() {
    modal.style.display = 'none'
}