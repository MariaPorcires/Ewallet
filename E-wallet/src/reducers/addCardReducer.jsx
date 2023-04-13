const initialState = {
    card: [],
}

const addCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_OBJECT':
            
            
            return {
                ...state,
                card: [...state.card, action.payload]
            }
    
        default:
            return state
    }
}

export default addCardReducer
