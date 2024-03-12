
    let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado) => {
    return new Promise((resolve,reject)=>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            resolve()
        }else{
            console.log('É necessario ligar o fogão e colocar a chaleira no fogao para ferver a água')
            reject()
        }
    })
}

    let chaleiraEstaNoFogao = true
    let fogaoEstaLigado = true 
    ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    console.log('fazendo café')