import { applyMiddleware, combineReducers, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import authReducer from "./reducers/auth";
import postReducer from "./reducers/posts";
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/currentUser";


const reducers = combineReducers({
    auth:authReducer,
    posts:postReducer,
    user:userReducer,
});

const persistConfig = {
    key:'root',
    storage
};

const persistedReducer = persistReducer(persistConfig,reducers);

const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export {store,persistor};