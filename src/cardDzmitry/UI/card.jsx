import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setDeckIdSuccess, setUserIdSuccess} from "../BLL/cardsReducer";
import {getDeckId, getUserId} from "../Selectors/selectorsCard";
import {cardAPI} from "../DAL/cardAPI";

const Card = ({userId, deckId, setUserIdSuccess, setDeckIdSuccess}) => {

    const [inputUserId, setInputUserId] = useState(userId);
    const [inputDeckId, setInputDeckId] = useState(deckId);

    const userIdChange = (e) => {
        setInputUserId(e.currentTarget.value)

    };

    const deckIdChange = (e) => {
        setInputDeckId(e.currentTarget.value)

    };

    
    setUserIdSuccess(inputUserId);
    setDeckIdSuccess(inputDeckId);

    cardAPI.getUser(1);
    cardAPI.getCards(1)


    const alertUserIAndDEckId = () => {
        console.log(userId,deckId )
    }

    return (
        <div>

            <div>
                <input type="text" placeholder={"userId"} onChange={userIdChange} />
            </div>

            <div>
                <input type="text" placeholder={"deckId"} onChange={deckIdChange}/>
            </div>


            <div>
                <button onClick={alertUserIAndDEckId}>set</button>
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
};

const mapStateToProps = (state) => ({
    userId: getUserId(state),
    deckId: getDeckId(state),
});


export default connect(mapStateToProps, {setUserIdSuccess, setDeckIdSuccess})(Card)