import React from 'react'

let SetUserCardId = (props) => {
    let putId = (e) => {
        let text = e.currentTarget.value
        props.putIdSuccess(text)


    }

    let putDeckId = (e) => {
        let text = e.currentTarget.value
        props.putDeckSuccess(text)

    }

    let putCardId = (e) => {
        let text = e.currentTarget.value
        props.putCardSuccess(text)

    }


    let setUser = () => {
        alert(props.cards.id + " " +
            props.cards.deckId)


    }

    return (
        <div>
            <div><input  name='id' onChange={putId} type="text" placeholder='id'/></div>
            <div><input  name='deckId' onChange={putDeckId} placeholder='deckId' type='text'/></div>
            <div><input  name='cardId' onChange={putCardId} placeholder='cardId' type='text'/></div>
            <div>
                <button type='button' onClick={setUser}>SetC</button>
            </div>
        </div>
    )
}

export default SetUserCardId

