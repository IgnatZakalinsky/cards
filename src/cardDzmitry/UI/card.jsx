import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {
    getCards,
    getUser,
    setDeckIdSuccess,
    setRandomNumber,
    setUserIdSuccess,
    toggleChecked
} from "../BLL/cardsReducer";
import {getCardsData, getChecked, getDeckId, getRandomNumber, getUserDAta, getUserId} from "../Selectors/selectorsCard";


const Card = ({
                  userId, deckId, setUserIdSuccess, setDeckIdSuccess, getUser, getCards, userData, cardsData,
                  checked, toggleChecked, randomNumberForCard , setRandomNumber
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


    };


    // временная функция
    const tempFunction = () => {

        toggleChecked(false);
        setRandomNumber()
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

                {cardsData.filter(c => c.id === randomNumberForCard ).map(c => <div key={c.id}>
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
    randomNumberForCard:getRandomNumber(state)
});


export default connect(mapStateToProps, {
    setUserIdSuccess, setDeckIdSuccess,
    getUser, getCards, toggleChecked ,setRandomNumber
})(Card)