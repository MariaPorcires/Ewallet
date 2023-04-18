const initialState = {
    card: [],
    activeCard: {}
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_OBJECT':
            
            return {
                ...state,
                card: [...state.card, action.payload]
            }

            case 'ACTIVE_CARD':

                return {
                    ...state,
                    activeCard: action.payload
                }


    
        default:
            return state

    }
}

export default cardReducer
