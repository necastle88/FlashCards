import { ADD_DECK, DELETE_DECK } from '../actions/index'; 
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
    }]
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
          items: state.items.filter((item, index) => index !== action.payload)
        }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  addDeckReducer,
})

export default rootReducer;
