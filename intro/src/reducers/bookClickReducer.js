const bookClickReducer = (state=false, action) => {
    switch (action.type){
        case "bookClick":{
            return (!state)
        }
        default: return state;
    }
}

export default bookClickReducer;