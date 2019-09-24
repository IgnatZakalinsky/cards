import React,{useEffect} from 'react'
import SetUserCardId from "./setUsersDeck";
import {connect} from 'react-redux'
import {
    clearSuccess,
    putAnswerSuccess, putCardIdSuccess,
    putDeckSuccess,
    putIdSuccess,
    putQuestionSuccess, saveUrlSuccess,
    setSuccess
} from "../BLL/editCardReducer";
import SetAnswerQuestions from "./setAnswerQuestions";
import {addCardThunk, getCardThunk} from "../BLL/editCardThunkCreator";
import {NavLink} from "react-router-dom";
import {setIdProfile} from "../../profileNatafiona/BLL/profileReducer";

// при нажатии на кнопки , должна пропадать надпись под инпутом: для этого требуется ActionCreator,
//  у которого будет значение свойства false, и когда мы передаем callback  этого  actionCreator мы
//должны прописать ему в вызове значение этого свойства props.setSuccess(false)


// при заходе на страницу должна срабатывать санка в useEffect
// запрашивающая карточку по id из импута cardId
//
// при нажатии на save card должен отправляться
// put запрос на сервер с отредактированной карточкой


let EditCard = (props) => {

    useEffect(()=>{
        props.getCardThunk()

    },[])




    let NavlinkToCard = () => {
        props.setSuccess(false)
        props.setIdProfile(props.cards.id)
    }

    return (
        <div>

            <SetUserCardId cards={props.cards} putCardIdSuccess={props.putCardIdSuccess}
                           putIdSuccess={props.putIdSuccess}
                           putDeckSuccess={props.putDeckSuccess}/>

            <SetAnswerQuestions cards={props.cards} addCardThunk={props.addCardThunk}
                                putAnswerSuccess={props.putAnswerSuccess}
                                putQuestionSuccess={props.putQuestionSuccess}
                                saveUrlSuccess={props.saveUrlSuccess}/>


            <div>
                <NavLink to={'/card/'}>
                <button onClick={NavlinkToCard}>Button Navlink to card</button>
                </NavLink>
            </div>


        </div>
    )
}

let mstp = (state) => {
    return {
        cards: state.editCard.cards
    }
}

export default connect(mstp, {
    addCardThunk,
    putIdSuccess,
    setSuccess,
    putDeckSuccess,
    putQuestionSuccess,
    putAnswerSuccess,
    clearSuccess,
    setIdProfile,
    saveUrlSuccess,
    putCardIdSuccess,
    getCardThunk
})(EditCard)

//ЧТОБЫ  очищать поля в инпуте, нужно повесить  action creator на кнопку,  и добавить атрибут  value с значением которое
    //находится в initialstate , потом зайти в редюсер , в редюсере сздать
    // case CLEAR_FOR_NEW:
    // return {
    //     ...state,
    //     cards: {...state.cards,answer: '', question: ''}
    //
    // };
// export const clearSuccess = () => ({type: CLEAR_FOR_NEW})
//

