const addtoBookReducer = (state = [], action) => {
    switch (action.type){
        case "addtoBook":{
            localStorage.setItem("cartitem", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        }
        case "deleteBookFromBasket":{
            let copyBasket = [...state]
            let indeks = copyBasket.findIndex (item => item.id === action.payload)
            copyBasket.splice(indeks,1)
            state = copyBasket

            if(state.length ===0){
                localStorage.clear()
            }
            else{
                localStorage.setItem("cartitems", JSON.stringify(state))  
            }
            return [...state]
        }
        default: return state;
    }
}

export default addtoBookReducer;