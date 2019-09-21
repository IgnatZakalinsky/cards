import React from 'react';
import {NavLink} from "react-router-dom";
import s from './CreateDeck.module.css';
import {connect} from "react-redux";
import {setId, setPathId} from "../BLL/createDeckReducer";

const CreateDeck = ({id,pathId,setId,setPathId}) => {

    const set = (e,type) => {
        let value = e.currentTarget.value;
        if(value){
            switch (type) {
                case 'id': {
                    setId(value); //Adding id in state
                    break;
                }
                case 'pathId': {
                    setPathId(value); //Adding pathId in state
                    break;
                }
                default: break;
            }
        }
    };

    const alertId = (typeId) => {
        alert(typeId ? typeId : 'empty');
    };

    return (
        <div className={s.container}>
           <div>
               <input onChange={(e) => set(e,'id')} type="text" placeholder={'id'}/>
               <button onClick={() => alertId(id)}>setId</button>
           </div>
            <div>
                <input onChange={(e) => set(e,'pathId')} type="text" placeholder={'pathId'}/>
                <button onClick={() => alertId(pathId)}>setPath</button>
            </div>
            <div>
                <input type="text" placeholder={'deckName'}/>
                <button onClick={() => {}}>Create deck</button>
                <button onClick={() => {}}>Delete deck</button>
            </div>
            <div>
                <button onClick={() => {}}>Create folder</button>
                <button onClick={() => {}}>Delete folder</button>
            </div>
            <span>isSuccess</span>   {/*status flag */}
            <div>
                <button><NavLink to={'addCard'} />Add Card</button>
                <button><NavLink to={'profile'} />Profile</button>
            </div>
        </div>
    );

};

export default connect((state) => ({id: state.createDeck.id,pathId: state.createDeck.pathId}),{setId,setPathId})(CreateDeck);