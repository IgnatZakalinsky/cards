import React from 'react'
import SetUserDeck from "./setUsersDeck";
import {connect} from 'react-redux'
import {putAnswerSuccess, putDeckSuccess, putIdSuccess, putQuestionSuccess} from "../BLL/addCardReducer";
import SetAnswerQuestions from "./setAnswerQuestions";
import {addCardThunk} from "../BLL/addCardThunkCreator";


let AddCard = (props) => {
    return (
        <div>

            <SetUserDeck cards={props.cards} putIdSuccess={props.putIdSuccess}
                         putDeckSuccess={props.putDeckSuccess}/>

            <SetAnswerQuestions cards={props.cards} addCardThunk={props.addCardThunk}  putAnswerSuccess={props.putAnswerSuccess}
                                putQuestionSuccess={props.putQuestionSuccess}/>

            <div>
                <button>ClearForNew</button>
            </div>
            <div>
                <button>Button Navlink to profile</button>
            </div>


        </div>
    )
}

let mstp = (state) => {
    return {
        cards: state.addCard.cards
    }
}

export default connect(mstp, {addCardThunk,putIdSuccess, putDeckSuccess,putQuestionSuccess,putAnswerSuccess})(AddCard)

