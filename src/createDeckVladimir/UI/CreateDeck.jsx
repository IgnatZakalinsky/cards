import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import s from './CreateDeck.module.css';
import {connect} from "react-redux";
import {deleteDeck, setDeck, setId, setIsAdmin, setPathId} from "../BLL/createDeckReducer";
import {getId, getIsAuth, getPathId, getStatus} from "../BLL/selectors";

const CreateDeck = ({id,isAdmin,pathId,setId,setPathId,setIsAdmin,status,setDeck,deleteDeck}) => {

    const [name, setName] = useState('');

    const set = (e,type) => {
        let value = e.currentTarget.value;
        if(value){
            switch (type) {
                case 'id': {
                    //setId(value); //Adding id in state
                    setIsAdmin(value); //Adding toggle flag isAuth in state
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

    const changeName = (e) => {
        let value = e.currentTarget.value;
        setName(value);
    };

    const createDeck = () => {
        if(pathId && name.trim()){
            setDeck(Number(pathId),name)
        }
    };

    const delDeck = () => {
        if(isAdmin === true){
            deleteDeck()
        }
    };

    return (
        <div className={s.container}>
           <div>
               <span>isAdmin</span>
               <input onChange={(e) => set(e,'id')} type="text" placeholder={'isAdmin'}/>
               <button onClick={() => alertId(isAdmin)}>setId</button>
           </div>
            <div>
                <input onChange={(e) => set(e,'pathId')} type="text" placeholder={'pathId'}/>
                <button onClick={() => alertId(pathId)}>setPath</button>
            </div>
            <div>
                <input onChange={changeName} type="text" placeholder={'deckName'} value={name}/>
                <button onClick={createDeck}>Create deck</button>
                <button onClick={delDeck}>Delete</button>
            </div>
            <div>
                <button onClick={() => {}}>Create folder</button>
                {/*<button onClick={() => {}}>Delete folder</button>*/}
            </div>
            <span>{status}</span>   {/*status flag */}
            <div className={s.btns}>
                <button><NavLink to={'/addCard'}>Add Card</NavLink></button>
                <button><NavLink to={'/profile'}>Profile</NavLink></button>
            </div>
        </div>
    );

};

export default connect((state) => ({id: getId(state),isAdmin: getIsAuth(state),pathId: getPathId(state),status: getStatus(state)}),{setId,setPathId,setIsAdmin,setDeck,deleteDeck})(CreateDeck);