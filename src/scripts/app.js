import {DATA_CARDS} from './modules/data.js'
import CardModel from './components/model/CardModel.js'
import DeckModel from './components/model/DeckModel.js'
import CardView from './components/view/CardView.js'
import DeckView from './components/view/DeckView.js'
import CardController from './components/controller/CardController.js'
import GameController from './components/controller/GameController.js'

document.addEventListener('DOMContentLoaded', () => {
  const cardModel = new CardModel('Question', 'Answer');
  const deckModel = new DeckModel();
  deckModel.addCard(cardModel);

  const cardView = new CardView(cardModel);
  const deckView = new DeckView(deckModel);
  deckView.cardViews.push(cardView);

  const gameController = new GameController(deckModel, deckView);
  gameController.startGame();
})



class Card {
  constructor() {
    this.isShowFace = true // по умолчанию лицо открыто

    this.card = document.querySelector('.card')
    this.cardText = document.querySelector('.card__text')
    this.card.addEventListener('pointerdown', this.onHandlerDown)
  }

  // Обработчик события нажатия
  onHandlerDown = (e) => {
    e.preventDefault()

    this.flipCard()
    this.toggleCardInteraction()
  }

  // Метод для переворота карты
  flipCard = () => {
    if (this.isShowFace) {
      this.animateCardFlip(false, 'card-back')
      this.showText(false)
    } else {
      this.animateCardFlip(true, 'card-back')
      this.showText(true)
    }

    this.isShowFace = !this.isShowFace
  }

  // Анимация переворота карты
  animateCardFlip = (showFace, className) => {
    gsap.timeline()
      .to(this.card, { scaleX: 0 })
      .call(() => {
        // Добавление или удаление класса
        if (showFace) {
          this.card.classList.remove(className)
        } else {
          this.card.classList.add(className)
        }
      })
      .to(this.card, { scaleX: 1 })
      .call(() => {
        this.toggleCardInteraction() // Восстановление взаимодействия с картой
      })
  }

  // Метод для временного отключения взаимодействия с картой
  toggleCardInteraction = () => {
    this.card.style.pointerEvents = (this.card.style.pointerEvents === 'none') ? 'auto' : 'none'
  }

  // Метод для отображения текста
  showText = (showFace) => {
    const cardData = DATA_CARDS[0]
    const textToShow = showFace ? cardData.question : cardData.answer
    this.cardText.textContent = textToShow
  }
}

// new Card()
