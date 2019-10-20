import { Store } from './Store'

const initialState = {
    name: 'John Doe',
    age: 25
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        case 'CHANGE_AGE':
            return { ...state, age: action.payload }
    }
    return state
}

const store = new Store(reducer)

console.log(store.getState())
store.dispatch({ type: 'CHANGE_NAME', payload: 'Adam Jones' })
store.dispatch({ type: 'CHANGE_AGE', payload: 26 })
console.log(store.getState())