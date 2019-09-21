import React from 'react'
import SetUserDeck from "./SetUsersDeck";

// --/addCard
// Input userId2
// Input deckId2
// Button set(uId, cId)
// Input question
// Input answer
// Text isSuccess
// Button addCard
// Button clearForNew
// Button NavLink
// to profile


let AddCard = (props) =>{

    let addCard = ()=>{
        // props.setOrdersSuccess
    }

    return(
        <div>
            {/*<SetUserDeck />*/}
            <input/>
            <input/>
            <button onClick={addCard}>addCard</button>
            <button>ClearForNew</button>
            <button>Button Navlink tomprofile</button>


        </div>
    )
}

export default AddCard

