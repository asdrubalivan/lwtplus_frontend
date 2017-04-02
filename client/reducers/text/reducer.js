import { actions } from './actions';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
      text: "Consectetur rerum aliquid non tenetur ducimus sunt corporis? Dolore quisquam ea tempora sequi ea! Cum placeat sit a ut ad. Aliquid accusamus veritatis vitae delectus corrupti! Voluptas numquam dolor eveniet!",
    splitChars: false,
    knownWords: [
        {
            word: "Amet",
            id: 1,
            status: 2,
        },
        {
            word: "soluta",
            id: 2,
            status: 1,
        },
        {
            word: "atque optio",
            id: 4,
            status: 3
        }
    ],
  }
);

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.ADD_TEXT:
      return state.set('text',action.textData);
    default: 
      return state;
  }
}

export default reducer;
