export default class DeckModel {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  shuffle() {
    // Логика перемешивания карточек
  }

  drawCard() {
    // Логика выдачи карточки
  }
}
