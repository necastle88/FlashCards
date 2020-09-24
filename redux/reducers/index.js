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
        if(index === action.payload.index) {
          return {
            ...item,
          cards: Object.assign({}, item, {
            cards: [action.payload.flashCard]
          })          
          }
        }
    
        // Leave every other item unchanged
        return item;
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