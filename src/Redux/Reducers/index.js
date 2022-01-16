// 4. mengkombinasikan reducer jika lebih dari 1 reducer.

import {combineReducers} from 'redux'
import {cardReducer,selectedCardReducer} from './CardReducer'

const reducers = combineReducers({
    cards : cardReducer,
    selected_card : selectedCardReducer,
})

export default reducers