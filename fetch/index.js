document.getElementById('tirarCarta').addEventListener('click',()=>{ tirarUmaCarta()})

async function baralhoEmbaralhado (){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()

}
async function tirarUmaCartaDoBaralho(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)    
    return await resposta.json()
}
async function tirarUmaCarta (){
    const baralho =  await baralhoEmbaralhado()
    const carta = await tirarUmaCartaDoBaralho(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta 
}
tirarUmaCarta()
console.log("segue o fluxo")
