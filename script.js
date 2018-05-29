// Redux is imported from vendors/redux.js
const INITIAL_STATE = 0;

// Actions
const INCREMENT = {
  type: 'INCREMENT',
};

const DECREMENT = {
  type: 'DECREMENT',
};

// Consumes state (which defaults to )
const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = Redux.createStore(counter);
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const number = document.getElementById('number');

incrementButton.addEventListener('click', () => {
  store.dispatch(INCREMENT);
});

decrementButton.addEventListener('click', () => {
  store.dispatch(DECREMENT);
});

store.subscribe(() => {
  number.innerText = store.getState();
});
