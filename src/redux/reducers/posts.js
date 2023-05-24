const postReducer = (state={posts:[]},action) =>{
    switch (action.type) {
        case "sendPost":
            return{
                ...state.posts,
                posts:action.payload
            }
        // case "getPosts":
        //     return{
        //         posts:action.payload
        //     }
        default:
            return state;
    }
}

export default postReducer;