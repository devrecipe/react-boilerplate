let counter = 1
let initState = []

const reducer = (state = initState, action) => {
    switch (action.type) {
    case 'FETCH_ITEMS':
        return state
    case 'CREATE_ITEM':
        counter++
        return [
            ...state,
            {
                id: counter,
                description: action.data
            }
        ]
    case 'DELETE_ITEM':
        return state.filter((item) => item.id != action.data)
    default:
        return state
    }
}

export default reducer