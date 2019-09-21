import React from 'react';
import {NavLink} from "react-router-dom";

const Card = () => {
    return (
        <div>

            <input type="text"/>
            <input type="text"/>
            <button>set</button>

            <span>text quesion</span>

            <button>check</button>

            <span>text answer</span>

            <button></button>
            <button></button>


            <div>
                <NavLink to='/editCard'>card</NavLink>
            </div>
            <div>
                <button>next</button>
                <button></button>

                <div>
                    <NavLink to='/profile'>card</NavLink>
                </div>
            </div>


        </div>
    )
}


export default Card