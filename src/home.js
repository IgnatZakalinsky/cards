import React from 'react';
import {NavLink, Route} from "react-router-dom";
import Routs from "./routs";
import Signup from "./signupSlizh/UI/signup";
import Profile from "./profileNatafiona/UI/profile";
import CheckDeck from "./checkDeckZaicev/UI/checkDeck";
import CreateDeck from "./createDeckVladimir/UI/CreateDeck";
import Card from "./cardDzmitry/UI/card";
import AddCard from "./addCardTolik/UI/addCard";
import SignIn from "./SigninOleg/UI/signIn";

function Home() {
    return (
        <div>
            <NavLink to={"/"}>
                <button>Routs</button>
            </NavLink>
            <Route exact path='/' render={() => <Routs/>}/>
            <Route path='/signup' render={() => <Signup/>}/>
            <Route path='/signin' render={() => <SignIn/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/checkDeck' render={() => <CheckDeck/>}/>
            <Route path='/createDeck' render={() => <CreateDeck/>}/>
            <Route path='/card' render={() => <Card/>}/>
            <Route path='/addCard' render={() => <AddCard/>}/>
        </div>
    );
}

export default Home;
