import React,{useState,useEffect} from 'react';
import {NavLink} from "react-router-dom";
import s from './CreateDeck.module.css';
import {connect} from "react-redux";
import {deleteDeck, setDeck, setId, setIsAdmin, setIsInput, setPathId, statuses} from "../BLL/createDeckReducer";
import {getId, getIsAuth, getIsInput, getPathId, getStatus} from "../BLL/selectors";
import {putDeckSuccess, putIdSuccess} from "../../addCardTolik/BLL/addCardReducer";

const CreateDeck = ({id,isAdmin,isInput,pathId,setId,setPathId,setIsAdmin,status,setDeck,deleteDeck,setIsInput,putDeckSuccess,putIdSuccess}) => {

    const [name, setName] = useState('');
    const [pathIdValue, setPathIdValue] = useState('');

    useEffect(() => {
        setPathIdValue(pathId)
    }, [pathId]);

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
        setIsInput(true);
        setName(value);
    };

    const createDeck = () => {
        if(pathId && name.trim()){
            setDeck(Number(pathId),name)
        }
    };

    const delDeck = () => {
        if(isAdmin){
            deleteDeck()
        }
    };

    const AddCard = () => {
        putIdSuccess(isAdmin);
        putDeckSuccess(pathId)
    };

    return (
        <div className={s.container}>
           <div>
               <span>isAdmin</span>
               <input onChange={(e) => set(e,'id')} type="text" placeholder={'isAdmin'}/>
               <button onClick={() => alertId(isAdmin)}>setId</button>
           </div>
            <div>
                <input onChange={(e) => set(e,'pathId')} type="text" placeholder={'pathId'} value={pathIdValue}/>
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
            {(!isInput || status !== statuses.error) && <span>{status}</span>}   {/*status flag */}
            <div className={s.btns}>
                <button onClick={AddCard}><NavLink to={'/addCard'}>Add Card</NavLink></button>
                <button><NavLink to={'/profile'}>Profile</NavLink></button>
            </div>
        </div>
    );

};

export default connect((state) => (
    {   id: getId(state),
        isAdmin: getIsAuth(state),
        pathId: getPathId(state),
        status: getStatus(state),
        isInput: getIsInput(state)
    }), {setId, setPathId, setIsAdmin, setDeck, deleteDeck, setIsInput,putDeckSuccess,putIdSuccess})(CreateDeck);