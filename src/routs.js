import React from 'react';
import {NavLink, Route} from "react-router-dom";

function Routs() {
  return (
    <div>
        <div><NavLink to={"/signup"}><button>Sign Up</button></NavLink></div>
        <div><NavLink to={"/signin"}><button>Sign In</button></NavLink></div>
        <div><NavLink to={"/card"}><button>Card</button></NavLink></div>
        <div><NavLink to={"/addCard"}><button>add Card</button></NavLink></div>
        <div><NavLink to={"/profile"}><button>Profile</button></NavLink></div>
        <div><NavLink to={"/checkDeck"}><button>check Deck</button></NavLink></div>
        <div><NavLink to={"/createDeck"}><button>create Deck</button></NavLink></div>
    </div>
  );
}

export default Routs;
