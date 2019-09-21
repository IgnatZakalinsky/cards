import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import signinReducer from "./SigninOleg/BLL/signinReduser";
import createDeckReducer from "./createDeckVladimir/BLL/createDeckReducer";


let reducers = combineReducers({
    createDeck: createDeckReducer,
    signin: signinReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store