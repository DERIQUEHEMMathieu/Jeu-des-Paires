let divRow = document.getElementById("divRow");

for (let i = 0; i < 12; i++){
    let cardC = document.createElement("div");   
    cardC.classList.add("col-3","col-sm-4","col-lg-2");
    let card = document.createElement("div");
    card.classList.add("playingCard");

    cardC.appendChild(card);
    divRow.appendChild(cardC);
}