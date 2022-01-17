// 3. membuat reducer untuk mengambil data yang tertampung di dispatch. dengan tujuan untuk memberi
// perubahan pada store.

import {ActionTypes} from '../Constants/ActionTypes'

const initialState = {
    cards : [],
}

export const cardReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_CARD:
            
            return {
                ...state,
                cards : payload
            }
    
        default:
            return state;
    }
}

export const selectedCardReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.SELECTED_CARD:
            
            return {
                ...state,
                ...action.payload
            }

        case ActionTypes.REMOVE_SELECTED_CARD:
            
            return {}
    
        default:
            return state;
    }
}