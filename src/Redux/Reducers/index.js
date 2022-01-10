// 4. mengkombinasikan reducer jika lebih dari 1 reducer.

import {combineReducers} from 'redux'
import {cardReducer,selectedCardReducer} from './CardReducer'

const reducers = combineReducers({
    all_products : cardReducer,
    selected_product : selectedCardReducer,
})

export default reducers