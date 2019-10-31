import { AsyncStorage } from 'react-native'

function saveToLocalStorage(state) {
    AsyncStorage.setItem("STATE", JSON.stringify(state))
}

export default function reducer(state, action) {
    console.log(state, action.type, action.props)
 
    let newState = {}

    switch (action.type) {
        // case 'HYDRATE':
        //     return {
        //         ...state,
        //         ...action.props
        //     }

        case 'RANDOM_NUMBER':
            const newRandomNumber = Math.floor(Math.random() * 41)

            newState = {
                ...state,
                number: newRandomNumber,
                list: [...state.list, newRandomNumber]
            }

            break;
        
        case 'SET_NUMBER': 

            newState = {
                ...state,
                number: action.props.value,
                list: [...state.list, action.props.value]
            }

            break;

        case 'DRAW_LOTTO':
            const num1 = Math.floor(Math.random() * 41)
            const num2 = Math.floor(Math.random() * 41)
            const num3 = Math.floor(Math.random() * 41)
            const num4 = Math.floor(Math.random() * 41)
            const num5 = Math.floor(Math.random() * 41)
            const num6 = Math.floor(Math.random() * 41)

            newState = {
                ...state,
                lottoList: [...state.lottoList, num1, num2, num3, num4, num5, num6]
            }

            break;

        case 'CLAIM_PRIZE':

            newState = {
                ...state,
                prize: action.props.value
            }

            break;

        case 'RESET': 

            newState = {
                ...state,
                number: '?',
                list: [],
                lottoList:[],
                prize: 0
            }

            break;
    
        default:
            newState = state
            break;
    }

    // we're after the switch statement
    // newState is already updated here
    saveToLocalStorage(newState)

    return newState
}