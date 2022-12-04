const dadosCarros = require('./cars.json')

const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')

// //quando eu clicar em uma seta, a foto, o modelo, a marca, o ano, a placa e a cor precisam mudar para o próximo elemento do array, como pego esses elementos?

const image = dadosCarros.carros[0].imagem
