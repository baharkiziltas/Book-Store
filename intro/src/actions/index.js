export const addtoBook = (payload) => {
    return{
        type: "addtoBook",
        payload: payload,
    }
}


export const deleteBookFromBasket = (payload) => {
    return{
        type: "deleteBookFromBasket",
        payload: payload,
    }
}

export const bookClick = () => {
    return{
        type: "bookClick"
    }
}