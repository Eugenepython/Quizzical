import React from 'react'


export default function TitlePage(props){
    
  return (
        <div style={{ display: props.display ? 'block' : 'none'}} className = 'titlePage'>
        <div className = 'titleHolder'>Are you feeling Quizzical?</div>
        <div className = 'description'>A quick test of your knowledge </div>
        <button onClick = {props.clickIt} className = 'startButtonHolder'><div className = 'startTextHolder'>Start Quiz</div></button>
        </div>
  )
}