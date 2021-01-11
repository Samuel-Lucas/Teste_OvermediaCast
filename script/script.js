let i = 0
let itens = document.getElementsByClassName('item')
let qtdItens = itens.length
let titulo = document.querySelector('h6')
let modal = document.querySelector('#modal')

titulo.classList.add('opacidade')
titulo.style.visibility = 'visible'

setTimeout(transicaoItens, 400)

function transicaoItens() {
    itens[i].classList.add('opacidade')
    itens[i].style.visibility = 'visible'
    i++

    if(i < qtdItens) {
        
        setTimeout(transicaoItens, 200)
    } else {
        i = 0

        setTimeout(() => {
            for(let j = 0; j < qtdItens; j++) {            
                itens[j].classList.remove('opacidade')
            } 
        }, 1000)
        
        setTimeout(pulo, 1500)
    }
}

function pulo() {

    itens[i].classList.add('animacao')

    if(itens[i].classList.contains("animacao")) {
        setTimeout(() => {
            itens[i].classList.remove('animacao')
        }, 250)
    }

    i++

    if(i > (qtdItens-1)) {
        i = 0
        setTimeout(pulo, 1500)
    } else {
        setTimeout(pulo, 400)
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