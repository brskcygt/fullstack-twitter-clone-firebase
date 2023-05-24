const authReducer = (state={auth:null},action) => {
    switch (action.type) {
        case "register":
            localStorage.setItem('auth',JSON.stringify(action.payload));
            return{
                ...state,
                auth:action.payload
            }
        
        case "login":
            localStorage.setItem('auth',JSON.stringify(action.payload));
            return{
                ...state,
                auth:action.payload
            }
        
        case "logout":
            localStorage.clear();
            return{
                ...state,
                auth:null
            }
        default:
            return state;
    }
}

export default authReducer;