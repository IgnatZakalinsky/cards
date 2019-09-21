import React from 'react';
import {NavLink} from "react-router-dom";
import s from './CreateDeck.module.css';

const CreateDeck = () => {

    return (
        <div className={s.container}>
           <div>
               <input type="text" placeholder={'id'}/>
               <button>setId</button>
           </div>
            <div>
                <input type="text" placeholder={'pathId'}/>
                <button>setPath</button>
            </div>
            <div>
                <input type="text" placeholder={'deckName'}/>
                <button>Create deck</button>
                <button>Delete deck</button>
            </div>
            <div>
                <button>Create folder</button>
                <button>Delete folder</button>
            </div>
            <span>isSuccess</span>
            <div>
                <button><NavLink to={'addCard'} />Add Card</button>
                <button><NavLink to={'profile'} />Profile</button>
            </div>
        </div>
    );

};

export default CreateDeck;