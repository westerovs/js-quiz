export default class CardController {
  constructor(cardModel, cardView) {
    this.cardModel = cardModel;
    this.cardView = cardView;
  }

  // Логика взаимодействия с картой
  flipCard() {
    this.cardModel.toggleFace();
    this.cardView.animateCardFlip();
    this.cardView.showText();
  }

  toggleCardInteraction() {
    this.cardView.toggleCardInteraction();
  }
}
