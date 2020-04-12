import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    results: []
}
const deleteResult= (state,action) => {
    const updatedArr = state.results.filter(result => result.id !== action.resultElID)
    return (state, {
        results: updatedArr
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.actionTypes.STORE_RESULT: return (state, { results: state.results.concat({ id: new Date(), value: action.result*2 }) })
        case actionTypes.actionTypes.DELETE_RESULT: return (deleteResult(state,action))
            
    }

    return state;
}

export default reducer;