import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import signinReducer from "./SigninOleg/BLL/signinReduser";
import createDeckReducer from "./createDeckVladimir/BLL/createDeckReducer";
import checkDeckReducer from "./checkDeckZaicev/BLL/checkDeckReducer";
import addCardReducer from "./addCardTolik/BLL/addCardReducer";
import profileReducer from "./profileNatafiona/BLL/profileReducer";
import cardsReducer from "./cardDzmitry/BLL/cardsReducer";
import singupReducer from "./signupSlizh/BLL/singupReducer";


let reducers = combineReducers({
    createDeck: createDeckReducer,
    signin: signinReducer,
    checkDeck: checkDeckReducer,
    profile: profileReducer,
    addCard: addCardReducer,
    cards: cardsReducer,
    singup: singupReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store