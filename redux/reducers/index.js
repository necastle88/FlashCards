import { ADD_DECK, DELETE_DECK, ADD_FLASHCARD } from '../actions/index'; 
import { combineReducers } from 'redux'

const initialState = {
    flashCards: [{
      name: 'Vic Henry',
      cards: [
        {
          question: ` What is the Capital Of India ?`,
          answer: `New Delhi`
        },
        {
          question: ` What is the Capital Of India ?`,
          answer: `New Delhi`
        },
        {
          question: ` What is the Capital Of India ?`,
          answer: `New Delhi`
        },
        {
          question: ` What is the Capital Of India ?`,
          answer: `New Delhi`
        },
        {
          question: ` What is the Capital Of India ?`,
          answer: `New Delhi`
        }
      ]
    },
  {
    name: 'deck with 3',
    cards: [
      {
        question: ` What is the Capital Of India ?`,
        answer: `New Delhi`
      },
      {
        question: ` What is the Capital Of India ?`,
        answer: `New Delhi`
      },
      {
        question: ` What is the Capital Of India ?`,
        answer: `New Delhi`
      },
    ]
  }
  
  ]
}

const addDeckReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return Object.assign({}, state, {
        flashCards: [...state.flashCards, action.payload]
      });
      case DELETE_DECK:
        return {
          ...state,
          flashCards: state.flashCards.filter((item, index) => index !== action.payload)
        }
      case ADD_FLASHCARD : 
      return state.flashCards.map((item, index) => {
        if(index !== action.payload.index) {
          // Leave every other item unchanged
          return item
        }
        return {
         ...item,
            cards: [...item.cards, action.payload.flashCard]
        }
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  addDeckReducer,
})

export default rootReducer;

/* flashCards: [{
  name: 'Vic Henry',
  cards: [
    {
      question: ` What is the Capital Of India ?`,
      answer: `New Delhi`
    }, */