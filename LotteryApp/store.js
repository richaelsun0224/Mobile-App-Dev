import Store from './flux'
import reducer from './reducer'

// Define initial store state
const initialState = {
    number: '?',
    list: [],
    lottoList: [],
    prize: 0
}


// initialize store
const store = new Store(reducer, initialState)
export default store