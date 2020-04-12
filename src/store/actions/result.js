import * as actionTypes from './actionTypes'
// import { getState } from 'expect/build/jestMatchersObject';

export const saveResult = (result) => {
    return {
        type: actionTypes.actionTypes.STORE_RESULT,
        result: result
    }
}
export const storeResult = (result) => {
    return (dispatch, getState) => {
        const oldCounter = getState().ctr.counter
        console.log(oldCounter)
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000)
    }

}
export const deleteResult = (resultElID) => {
    return {
        type: actionTypes.actionTypes.DELETE_RESULT,
        resultElID: resultElID
    }
}