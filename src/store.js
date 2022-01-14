import { createStore } from "redux";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "seconsd": {
      return { ...state, seconds: action.payload };
    }
    case "minutes": {
      return { ...state, minutes: action.payload };
    }
    case "hours": {
      return { ...state, hours: action.payload };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);
export default store;
