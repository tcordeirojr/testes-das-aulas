let pessoas = [
    {nome : 'Roberto' , idade: 33},
    {nome:'Ricardo' , idade:33},
    {nome:'Rafael', idade:27 }
]
//---------FORMA COM FOR ------------------//
// let nomeDasPessoas= []
// for (let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }
// console.log(nomeDasPessoas)


//--------- COM MAP USANDO FUNCTION--------------//
// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return pessoa.nome
// })
// console.log(nomeDasPessoas)

//--------- MAP COM ARROW FUNCTIONS------------------//
let nomeDasPessoas = pessoas.map((pessoa)=>pessoa.nome)
console.log(nomeDasPessoas)