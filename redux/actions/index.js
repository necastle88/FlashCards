/************************
*******Action Types******
************************/
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'


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
