let readFile = require('read-excel-file/node')
let writeJson = require('write-json')

const objCarros = {
    carros: [],
}

readFile('./Carros.xlsx').then((element) => {
    element.forEach((rows, index) => {
        if(index === 0){
            return
        }
        const marcaValor = rows[0]
        const modeloValor = rows[1]
        const anoValor = rows[2]
        const placaValor = rows[3]
        const corValor = rows[4]
        const imagemValor = rows[5]

        const novoCarro = {
            marca: marcaValor,
            modelo: modeloValor,
            ano: anoValor,
            placa: placaValor,
            cor: corValor,
            imagem: imagemValor
        }

        objCarros.carros.push(novoCarro)
        });
        console.log(objCarros)
        writeJson('cars.json', objCarros)
})