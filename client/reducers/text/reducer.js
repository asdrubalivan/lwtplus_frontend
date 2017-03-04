import actions from './actions';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  textData: {
    content: "Consectetur rerum aliquid non tenetur ducimus sunt corporis? Dolore quisquam ea tempora sequi ea! Cum placeat sit a ut ad. Aliquid accusamus veritatis vitae delectus corrupti! Voluptas numquam dolor eveniet!2",
    leftToRight: true,
    language: "Latin"
  }
});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.ADD_TEXT:
      return state.set('textData',action.textData);
    default:
      return state;
  }
}

export default reducer;
