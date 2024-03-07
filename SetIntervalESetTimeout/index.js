//setTimeout(() =>{
  //  alert('olá Mundo')
//});

setTimeout(() => {
    console.log('console dentro do setTimeout')
}, 4000);

setInterval(() => {
    console.log('executando a cada 2 segundos')
}, 2000);

console.log('console depois do setTimeout')

const idDoIntervalo = setInterval(() =>{
                        console.log('executando a cada 2 segundos')
                    },2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout
