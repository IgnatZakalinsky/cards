import React from 'react';
import {NavLink} from "react-router-dom";

const CheckDeck = () => {
    return (
        <div>

            <div>
                <div><span>Text ID</span></div>
                <div><input type="text" placeholder={"id2"}/></div>
                <div>
                    <button>setID</button>
                </div>
            </div>

            <div>
                <button>folder</button>
            </div>
            <div>
                <button>deck</button>
            </div>
            <div><span>Text cards</span></div>
            <div>
                <NavLink to='/card'><button>card</button></NavLink>
            </div>
            <div>
                <NavLink to='/createDeck'><button>createDeck</button></NavLink>
            </div>
            <div>
                <NavLink to='/profile'><button>profile</button></NavLink>
            </div>
        </div>
    );
}

export default CheckDeck;
