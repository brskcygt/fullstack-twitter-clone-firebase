import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../../firebase.js";

export const registerAction = ({ email, password}) => async (dispatch) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        // const currentUser = auth.currentUser;
        // currentUser.photoURL = photoURL;
        dispatch({ type: "register", payload: user })
        window.location = "/";
    } catch (error) {
        toast.error(error.message)
    }
}

export const loginAction = ({ email, password }) => async (dispatch) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        // const currentUser = auth.currentUser;
        // currentUser.photoURL = photoURL;
        dispatch({ type: "login", payload: user })
        window.location = "/";
    } catch (error) {
        toast.error(error.message)
    }
}

export const logoutAction = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch({ type: 'logout' })
        window.location = "/register";
    } catch (error) {
        toast.error(error.message)
    }
}