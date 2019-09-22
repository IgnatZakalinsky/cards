import React from 'react'

// --/addCard
// Input userId2
// Input deckId2
// Button set(uId, cId)

let SetUserDeck = (props) => {

    let setUser = () => {
       props.setUsersSuccess(props.id)
    }

    return (
        <div>
            <div><input placeholder='userId2'/></div>
            <div><input placeholder='deckId2'/></div>
            <div><button onClick={setUser}>Set</button></div>
        </div>
    )
}

export default SetUserDeck

