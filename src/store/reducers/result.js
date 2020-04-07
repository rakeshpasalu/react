import actionTypes from '../actions';

const initialState = {
    results: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.STORE_RESULT: return { ...state, results: state.results.concat({ id: new Date(), value: action.result }) }
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter(result => result.id !== action.resultElID)
            console.log(updatedArr)
            return {

                ...state,
                results: updatedArr

            }


    }

    return state;
}

export default reducer;