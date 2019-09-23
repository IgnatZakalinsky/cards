import React from 'react'
import {setSuccess} from "../BLL/addCardReducer";

let SetAnswerQuestions = (props) => {
    let putQuestion = (e) => {
        let text = e.currentTarget.value
        props.putQuestionSuccess(text)


    }

    let putAnswer = (e) => {
        let text = e.currentTarget.value
        props.putAnswerSuccess(text)

    }

    let AddCard = () => {
       props.addCardThunk()

    }

    return (
        <div>
            <div>
                <input name='question' value={props.cards.question}  onChange={putQuestion} type="text" placeholder='question'/>
            </div>
            <div>
                <input name='answer' value={props.cards.answer} onChange={putAnswer} type='text' placeholder='answer'/>
            </div>
            <div>
               <div> { props.cards.success  ? 'add Card Success' : ''}</div>
                {/*выводит запись, add Card Success, добавили в редюсере*/}
                {/*свойство  success: false,  потом создали action creator,  передали его в ThunkCreator , вызвали его там*/}
                {/*передав в вызов dispatch(setSuccess(true)); потом  написали проверку тернарным выражением*/}
                {/*<div> { props.cards.success  ? 'add Card Success' : ''}</div>*/}
                <button type='button' onClick={AddCard}>addCard</button>
            </div>
        </div>
    )
}

export default SetAnswerQuestions

