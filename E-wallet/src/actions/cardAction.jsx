function cardAction(item) {
    return {
        type: 'ADD_OBJECT',
        payload: item
    }
}

function activeCard(item) {
    return {
        type: 'ACTIVE_CARD',
        payload: item
    }
}

export { cardAction, activeCard }