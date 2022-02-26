const redux = require('redux');

// console.log(redux);

// State
const initState = {
    rNum: 0
}

// Reducer
const rootReducer = (state = initState, action) => {
    if (action.type === 'INC_NUM') {
        return {
            ...state,
            rNum: state.rNum + 1
        }
    }
    if (action.type === 'ADD_NUM') {
        return {
            ...state,
            rNum: state.rNum + action.rsd_age
        }
    }
    if (action.type === 'DEC_NUM') {
        return {
            ...state,
            rNum: state.rNum - 1
        }
    }
    return state;
}
// Store
const store = redux.createStore(rootReducer);

console.log(store.getState());
// Subscribe
store.subscribe(() => {
    console.log("subscribe", store.getState());
})

// Dispatch Action
store.dispatch({
    type: 'ADD_NUM',
    rsd_age: 34
});

store.dispatch({
    type: 'INC_NUM'
});

store.dispatch({
    type: 'DEC_NUM'
});
