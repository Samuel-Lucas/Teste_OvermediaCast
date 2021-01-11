let i = 0
let itens = document.getElementsByClassName('item')
let qtdItens = itens.length
let titulo = document.querySelector('h6')
let modal = document.querySelector('#modal')
let tituloModal = document.querySelector('#modal h3')
let imagem = document.querySelector('#modal img')
let height = document.querySelector('#modal .height')
let width = document.querySelector('#modal .weight')

titulo.classList.add('opacidade')
titulo.style.visibility = 'visible'

setTimeout(transicaoItens, 400)

function transicaoItens() {   // Função onde os itens se tornam visíveis

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

function pulo() {   // Função da animação de 'pulo' passada para os itens

    itens[i].classList.add('animacao')

    setTimeout(() => {
        itens[i].classList.remove('animacao')
    }, 350)
    
    i++

    if(i > (qtdItens-1)) {
        i = 0
        setTimeout(pulo, 1500)
    } else {
        setTimeout(pulo, 400)
    } 
}

async function showContent(indice) {   // Função de exibição dos dados da API conforme indice passado

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

function closeModal() {   // Função para fechar o Modal
    modal.style.display = 'none'
}