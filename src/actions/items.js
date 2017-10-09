const Fetch = () => {
    return {
        type: 'FETCH_ITEMS'
    }
}

const Create = (description) => {
    return {
        type: 'CREATE_ITEM',
        data: description
    }
}

const Delete = (id) => {
    return {
        type: 'DELETE_ITEM',
        data: id
    }
}

module.exports = {
    Fetch, Create, Delete
}