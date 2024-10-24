const emojis = [
    "👽",
    "👽",
    "👻",
    "👻",
    "👾",
    "👾",
    "🤖",
    "🤖",
    "💀",
    "💀",
    "🕷",
    "🕷",
    "🐱‍👤",
    "🐱‍👤",
    "👹",
    "👹",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick;
    box.id = [i];
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2  ){
        setTimeout(checkMath, 500);
    }
    
}

function checkMath(){
     // Pega o conteúdo de dentro dos cards armazenados no vetor.
   let cards1 = openCards[0].innerHTML
   let cards2 = openCards[1].innerHTML

   // Se os cards tiverem o conteúdo igual e ID diferentes eles recebem a classe boxMatch
   if (cards1 === cards2  && openCards[0].id != openCards[1].id) {
      openCards[0].classList.add('boxMatch')
      openCards[1].classList.add('boxMatch')
      openCards[0].classList.remove('boxOpen')
      openCards[1].classList.remove('boxOpen')
   } else {
   // Se os cards tiverem o conteúdo diferente eles perdem a classe boxOpen
      openCards[0].classList.remove('boxOpen')
      openCards[1].classList.remove('boxOpen')
   }

   // Após a verificação o vetor é resetado
   openCards = [];

   // Verifica se todos os cards que tem a classe boxMatch é igual ao tamanho do vetor de elementos do emoji.
   if (document.querySelectorAll('.boxMatch').length === emojis.length) {
      // Mostra a mensagem de vitória
      alert('Você venceu!')
   }
}
