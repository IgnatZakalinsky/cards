import React from 'react';
import {NavLink} from "react-router-dom";

function Page() {
    return (
        <div>
            <span></span>
            <input type="text"/>
            <button></button>
            <button></button>
            <button></button>
            <span></span>
            <div>
                <NavLink to='/card'>card</NavLink>
            </div>
            <div>
                <NavLink to='/createDeck'>createDeck</NavLink>
            </div>
            <div>
                <NavLink to='/profile'>profile</NavLink>
            </div>
        </div>
    );
}

export default Page;
