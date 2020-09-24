/************************
*******Action Types******
************************/
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'

/************************
*****Action Creators*****
************************/
export const addDeck = name => {
  return {
    type: ADD_DECK,
    payload: {  
      name,
      cards: []
    }
  }
}

export const deleteDeck = index => {
  return {
    type: DELETE_DECK,
    payload: index
  }
}

// Flash card payload object looks like { question: `text`, answer: `text` },
export const addFlashcard = (flashCard, cardId) => {
  return {
    type: ADD_FLASHCARD,
    payload: { 
      flashCard: flashCard,
      index: cardId 
    }
  }
}