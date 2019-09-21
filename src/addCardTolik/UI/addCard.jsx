import React from 'react'
import SetUserDeck from "./setUsersDeck";

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
            <div><input placeholder='userId2'/></div>
            <div><input placeholder='deckId2'/></div>
             <div><button>Set</button></div>
            {/*<SetUserDeck />*/}
            <div><input/>Input question</div>
            <div><input/>Input answer</div>

            <div>Text isSuccess  ИГНАТ Что ЭТО????? ВНИМАНИЕ!!!</div>


            <div><button>addCard</button></div>
            <div><button>ClearForNew</button></div>
            <div><button>Button Navlink to profile</button></div>


        </div>
    )
}

export default AddCard

