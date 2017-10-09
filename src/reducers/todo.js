let counter = 1
let initState = []

const reducer = (state = initState, action) => {
    switch (action.type) {
    case 'FETCH_ITEMS':
        return state
    case 'CREATE_ITEM':
        state.push({ id: counter, description: action.data })
        counter++
        return state
    case 'DELETE_ITEM':
        state = state.filter((item) => item.id != action.data)
        return state
    default:
        return state
    }
}

export default reducer