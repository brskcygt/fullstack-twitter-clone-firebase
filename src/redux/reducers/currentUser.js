const userReducer = (state={user:null},action) =>{
    switch (action.type) {
        case "currentUser":
            return {
                user:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;