import React from 'react'
import SetUserDeck from "./setUsersDeck";
import {connect} from 'react-redux'
import {
    clearSuccess,
    putAnswerSuccess,
    putDeckSuccess,
    putIdSuccess,
    putQuestionSuccess,
    setSuccess
} from "../BLL/addCardReducer";
import SetAnswerQuestions from "./setAnswerQuestions";
import {addCardThunk} from "../BLL/addCardThunkCreator";

// при нажатии на кнопки , должна пропадать надпись под инпутом: для этого требуется ActionCreator,
//  у которого будет значение свойства false, и когда мы передаем callback  этого  actionCreator мы
//должны прописать ему в вызове значение этого свойства props.setSuccess(false)


let AddCard = (props) => {
    let ClearForNew = () => {
        props.setSuccess(false)
        props.clearSuccess()
    }

    let NavlinkToProfile = () => {
        props.setSuccess(false)
    }

    return (
        <div>

            <SetUserDeck cards={props.cards} putIdSuccess={props.putIdSuccess}
                         putDeckSuccess={props.putDeckSuccess}/>

            <SetAnswerQuestions cards={props.cards} addCardThunk={props.addCardThunk}
                                putAnswerSuccess={props.putAnswerSuccess}
                                putQuestionSuccess={props.putQuestionSuccess}/>

            <div>
                <button onClick={ClearForNew}>ClearForNew</button>
            </div>
            <div>
                <button onClick={NavlinkToProfile}>Button Navlink to profile</button>
            </div>


        </div>
    )
}

let mstp = (state) => {
    return {
        cards: state.addCard.cards
    }
}

export default connect(mstp, {
    addCardThunk,
    putIdSuccess,
    setSuccess,
    putDeckSuccess,
    putQuestionSuccess,
    putAnswerSuccess,
    clearSuccess
})(AddCard)

