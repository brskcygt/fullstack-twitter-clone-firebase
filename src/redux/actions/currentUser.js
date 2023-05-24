export const currentUserAction = ({name,surname,username,email,password,profilePhoto}) => (dispatch) =>{
    const user = {
        displayName: name+surname,
        username:username,
        email:email,
        password:password,
        profilePhoto:profilePhoto,
    }
    dispatch({type:"currentUser",payload:user});
}