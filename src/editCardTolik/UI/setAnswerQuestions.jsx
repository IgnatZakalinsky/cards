import React from 'react'

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

    let saveUrlReducer = (e) => {
        let text = e.currentTarget.value
        props.saveUrlSuccess(text)
    }

    return (
        <div>
            <div>
                <img src={props.cards.imgURL} alt="URL"/>
            </div>
            <div>
                <input type="text" value={props.cards.imgURL} onChange={saveUrlReducer}
                       placeholder="imgURL"/>
            </div>
            <div>
                <textarea name='question' value={props.cards.question}
                       onChange={putQuestion} placeholder='question'/>
            </div>
            <div>
                <textarea name='answer' value={props.cards.answer}
                       onChange={putAnswer}  placeholder='answer'/>
            </div>
            <div>
                <div> {props.cards.success ? 'add Card Success' : ''}</div>
                {/*выводит запись, add Card Success, добавили в редюсере*/}
                {/*свойство  success: false,  потом создали action creator,  передали его в ThunkCreator , вызвали его там*/}
                {/*передав в вызов dispatch(setSuccess(true)); потом  написали проверку тернарным выражением*/}
                {/*<div> { props.cards.success  ? 'add Card Success' : ''}</div>*/}
                <button type='button' onClick={AddCard}>saveCard</button>
            </div>
        </div>
    )
}

export default SetAnswerQuestions

