import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase"
import firebase from "firebase/compat/app";


export const sendTweetAction = (content) => async (dispatch) => {
    if (content !== "") {
        await addDoc(collection(db, "feed"), {
            displayName: "Barış Koçyiğit",
            username: "brs_kocyigit",
            content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: '',
            avatar: 'https://pbs.twimg.com/profile_images/1559644611047464961/r6inVDH0_400x400.jpg'
        });
        dispatch({ type: "sendTweet", payload: content })
    }
}

// export const getTweetsAction = () => async (dispatch) => {
//     const q = query(collection(db, "feed"), orderBy("timestamp", "desc"));
//     const querySnapshot = onSnapshot(q, (snapshot) => {
//         snapshot.docs.map((doc) => doc.data());
//     });
//     return querySnapshot;
// }