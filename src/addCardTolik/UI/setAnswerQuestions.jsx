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

    return (
        <div>
            <div>
                <input name='question' onChange={putQuestion} type="text" placeholder='question'/>
            </div>
            <div>
                <input name='answer' onChange={putAnswer} type='text' placeholder='answer'/>
            </div>
            <div>
                <button type='button' onClick={AddCard}>addCard</button>
            </div>
        </div>
    )
}

export default SetAnswerQuestions

