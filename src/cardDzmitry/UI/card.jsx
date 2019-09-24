import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getCards, getRandomCard, getUser, setDeckIdSuccess, setUserIdSuccess, toggleChecked} from "../BLL/cardsReducer";
import {getCardsData, getChecked, getDeckId, getUserDAta, getUserId} from "../Selectors/selectorsCard";


const Card = ({
                  userId, deckId, setUserIdSuccess, setDeckIdSuccess, getUser, getCards, userData, cardsData,
                  checked, toggleChecked
              }) => {

    const [inputUserId, setInputUserId] = useState(1);
    const [inputDeckId, setInputDeckId] = useState(1);


    const userIdChange = (e) => {
        setInputUserId(e.currentTarget.value)


    };

    const deckIdChange = (e) => {
        setInputDeckId(e.currentTarget.value)

    };


    // setUserIdSuccess(inputUserId);
    // setDeckIdSuccess(inputDeckId);


    const alertUserIAndDEckId = () => {
        getUser(inputUserId);
        getCards(inputDeckId);
        // cardAPI.getUser(1);
        // cardAPI.getCards(1)

    };


    // временная функция
    const tempFunction = () => {

        toggleChecked(false);
        getCards(1)
    };

    return (
        <div>

            <div>
                <input type="text" placeholder={"userId"} onChange={userIdChange} value={userId}/>
            </div>

            <div>
                <input type="text" placeholder={"deckId"} onChange={deckIdChange} value={deckId}/>
            </div>


            <div>
                <button onClick={alertUserIAndDEckId}>set</button>
            </div>

            <div>

                {cardsData.map(c => <div key={c.id}>
                    <span> {c.question} </span>
                </div>)}


            </div>


            {!checked ?
                <div>
                    <button onClick={() => {toggleChecked(true)}}>check</button>
                </div> :
                <div>
                    <span>text answer</span>

                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </div>
                </div>}


            <div>
                <NavLink to='/editCard'>
                    <button>to edit card</button>
                </NavLink>
            </div>
            <div>
                <button onClick={tempFunction}>next
                </button>


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
    userData: getUserDAta(state),
    cardsData: getCardsData(state),
    checked: getChecked(state),
});


export default connect(mapStateToProps, {
    setUserIdSuccess, setDeckIdSuccess,
    getUser, getCards, toggleChecked, getRandomCard
})(Card)