import { ADD_DECK, DELETE_DECK, ADD_FLASHCARD } from "../actions/index";
import { combineReducers } from "redux";

const initialState = {
  flashCards: [
    {
      name: "Vic Henry",
      cards: [
        {
          question: `1 What is the Capital Of India ?`,
          answer: `1 New Delhi`,
        },
        {
          question: `2 What is the Capital Of India ?`,
          answer: `2New Delhi`,
        },
        {
          question: `3 What is the Capital Of India ?`,
          answer: `3New Delhi`,
        },
        {
          question: `4 What is the Capital Of India ?`,
          answer: `4 New Delhi`,
        },
        {
          question: `5 What is the Capital Of India ?`,
          answer: `5 New Delhi`,
        },
      ],
    },
    {
      name: "deck with 3",
      cards: [
        {
          question: `D3 1 What is the Capital Of India ?`,
          answer: `D3 1 New Delhi`,
        },
        {
          question: `D3 2 What is the Capital Of India ?`,
          answer: `D3 2 New Delhi`,
        },
        {
          question: `D2 3 What is the Capital Of India ?`,
          answer: `D3 3 New Delhi`,
        },
      ],
    },
  ],
};

const addDeckReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return Object.assign({}, state, {
        flashCards: [...state.flashCards, action.payload],
      });
    case DELETE_DECK:
      return {
        ...state,
        flashCards: state.flashCards.filter(
          (item, index) => index !== action.payload
        ),
      };
    case ADD_FLASHCARD:
      let flashcards = [...state.flashCards]; //copy all flashcards into temporal varable
      let deck = flashcards[action.payload.index]; //get the particular deck we want to add a card to
      flashcards[action.payload.index] = {
        ...deck,
        cards: [...deck.cards, action.payload.flashCard],
      }; //overwrite the deck of that old index with the modified one

      const modifiedFlashcards = [
        {
          ...state,
          flashCards: flashcards, //return the new flashcards array after modifying it.
        },
      ];
      return Object.assign({}, state, {
        flashCards: flashcards,
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  addDeckReducer,
});

export default rootReducer;
