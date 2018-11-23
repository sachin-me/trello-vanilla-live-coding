function addCard(list) {
  list.cardForm.style.display = 'block';
  const cardText = list.cardNodes.querySelector('.card-text')
      , cardSubmit = list.cardNodes.querySelector('.card-submit');
  cardSubmit.onclick = addNewCard;
  function addNewCard(e){
    e.preventDefault();
    let title = cardText.value
        , card;
    card = new Card(list, title);
    cardText.value = "";
    console.log(list.cardForm.style.display)
    list.cardForm.style.display = 'none';
    console.log(list.cardForm.style.display)
    list.cardNodes.insertBefore(card.node, list.cards[list.cards.length - 1].node)
  }
}