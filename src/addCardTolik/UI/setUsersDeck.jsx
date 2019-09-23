import React from 'react'

let SetUserDeck = (props) => {
    let putId = (e) => {
        let text = e.currentTarget.value
        props.putIdSuccess(text)


    }

    let putDeckId = (e) => {
        let text = e.currentTarget.value
        props.putDeckSuccess(text)

    }


    let setUser = () => {
        alert(props.cards.id + " " +
            props.cards.deckId)


    }

    return (
        <div>
            <div><input name='id' onChange={putId} type="text" placeholder='id'/></div>
            <div><input name='deckId' onChange={putDeckId} placeholder='deckId' type='text'/></div>
            <div>
                <button type='button' onClick={setUser}>Set</button>
            </div>
        </div>
    )
}

export default SetUserDeck

