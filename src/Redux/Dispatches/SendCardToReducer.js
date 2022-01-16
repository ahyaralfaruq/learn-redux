// 2. membuat dispatch untuk menampung data yang dikirim user untuk dikirim lagi ke reducer.

import {ActionTypes} from '../Constants/ActionTypes'

export const setCard = (cards) => {
    return {
        type : ActionTypes.SET_CARD,
        payload : cards
    }
}

export const selectedCard = (card) => {
    return {
        type : ActionTypes.SELECTED_CARD,
        payload : card
    }
}

export const removeSelectedCard = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_CARD
    }
}