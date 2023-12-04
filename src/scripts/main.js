const DATA_CARDS = [
  {
    question: `вопрос`,
    answer: `ответ`,
  }
]



class Card {
  constructor() {
    this.isShowFace = true // по умолчанию лицо открыто

    this.card = document.querySelector('.card')
    this.card.addEventListener('pointerdown', this.onHandlerDown)
    // this.card.addEventListener('transitionend', this.flipCard)
  }

  onHandlerDown = (e) => {
    e.preventDefault()

    this.flipCard()
    this.disabledCard()
  }

  flipCard = () => {
    if (this.isShowFace) {

    } else {

    }

    // this.card.style.transform = 'scaleX(0)'
    // this.card.style.transform = 'scaleX(1)'
    // this.card.classList.add('card-answer')
    // this.unDisabledCard()
    // this.isShowFace = !this.isShowFace
  }


  showFace = () => {

  }

  showShirt = () => {

  }

  disabledCard = () => {
    this.card.style.pointerEvents = 'none'
  }

  unDisabledCard = () => {
    this.card.style.pointerEvents = 'auto'
  }

}

new Card()
