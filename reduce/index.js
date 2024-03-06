let ordens =[
    {cliente: 'roberto', tipo:'compra',quantidade: 56, ativo:'NFLX34'},
    {cliente: 'ricardo', tipo:'compra',quantidade: 76, ativo:'APPL34'},
    {cliente: 'raphael', tipo:'venda',quantidade: 21, ativo:'GOGL34'},

]

// let quantidadeDeOrdens = 0
// for(let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens [i].quantidade
// }

// console.log(quantidadeDeOrdens)

let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens,ordem){
    return somaDasOrdens + ordem.quantidade
},0)
console.log(quantidadeDeOrdens)
