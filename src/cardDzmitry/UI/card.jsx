import React from 'react';
import {NavLink} from "react-router-dom";

const Card = () => {
    return (
        <div>

            <div>
                <input type="text" placeholder={"userId"}/>
            </div>

            <div>
                <input type="text" placeholder={"cardsId"}/>
            </div>


            <div>
                <button>set</button>
            </div>

            <div>
                <span>text quesion</span>
            </div>


            <div>
                <button>check</button>
            </div>


            <span>text answer</span>

            <div>
                <button>is isSuccess</button>
            </div>


            <div>
                <NavLink to='/editCard'>
                    <button>to edit card</button>
                </NavLink>
            </div>
            <div>
                <button>next</button>


                <div>

                    <NavLink to='/profile'>
                        <button>to profile</button>
                    </NavLink>

                </div>
            </div>


        </div>
    )
}


export default Card