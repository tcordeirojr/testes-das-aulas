let  pessoas = [
    {nome: 'Ricardo', idade: 33},
    {nome:'Roberto' , idade:33},
    {nome:'Rafael', idade:27}
]
//---------- COM FOR E IF ------------------------//
// let pessoasComIdadeDe33Anos = []
// for(let i = 0 ; i < pessoas.length; i++){
//     if(pessoas[i].idade === 33){
//         pessoasComIdadeDe33Anos.push(pessoas[i])
//     }
// }
// console.log(pessoasComIdadeDe33Anos)
//}


//----------- COM FILTER --------------------------//
//let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa){
//    return pessoa.idade === 33
//})
//console.log(pessoasComIdadeDe33Anos)

//-------------- COM ARROW FUNCTIONS --------------//
let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)
console.log(pessoasComIdadeDe33Anos)