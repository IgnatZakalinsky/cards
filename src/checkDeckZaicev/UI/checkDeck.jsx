import React from 'react';
import {NavLink} from "react-router-dom";

function CheckDeck() {
    return (
        <div>
            <span>Text ID</span>
            <input type="text" placeholder={"id2"}/>
            <button>setID</button>
            <button>folder</button>
            <button>deck</button>
            <span>Text cards</span>
            <div>
                <button>card</button>
                {/*<NavLink to='/card'><button>card</button></NavLink>*/}
            </div>
            <div>
                <button>createDeck</button>
                {/*<NavLink to='/createDeck'><button>createDeck</button></NavLink>*/}
            </div>
            <div>
                <button>profile</button>
                {/*<NavLink to='/profile'><button>profile</button></NavLink>*/}
            </div>
        </div>
    );
}

export default CheckDeck;
