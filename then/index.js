let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise ((resolve,reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver a água')
            resolve()
        }else{
            console.log('é necessario colocar a chaleira com a água e ligar o fogão senão teu cafezinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let passarCafe = () => console.log('passando café')
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('fazendo café')

