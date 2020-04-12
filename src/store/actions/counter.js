import * as actionTypes from './actionTypes'

export const increment = () => {
    return {
        type: actionTypes.actionTypes.INCREMENT
    }
}
export const decrement = () => {
    return {
        type: actionTypes.actionTypes.DECREMENT
    }
}
export const subtract = (value) => {
    return {
        type: actionTypes.actionTypes.SUBTRACT,
        value: value
    }
}
export const add = (value) => {
    return {
        type: actionTypes.actionTypes.ADD,
        value: value
    }
}