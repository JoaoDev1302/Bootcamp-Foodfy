const cards = document.querySelectorAll(".receita")

for(let card of cards){
    card.addEventListener('click',function(){
        const receitaId = card.getAttribute('id')
        window.location.href = `/receitas/${receitaId}`
    })
}