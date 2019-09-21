import React from 'react'

// --/addCard
// Input userId2
// Input deckId2
// Button set(uId, cId)

let SetUserDeck = (props) => {

    let setUser = () => {

    }

    return (
        <div>
            <input placeholder='user'/>
            <input placeholder='deck'/>
            <button onClick={setUser}>Set</button>
        </div>
    )
}

export default SetUserDeck

