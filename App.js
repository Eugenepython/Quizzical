import React from 'react'
import MainQuiz from './MainQuiz'
import TitlePage from './TitlePage'

export default function App(){
    
const [display, changeDisplay] = React.useState(true)
//console.log(isSubmitted)    
    function clickIt(){
    
    changeDisplay(false)
    //window.location.reload()
  }
    
    return (
        <div>
        <TitlePage clickIt = {clickIt} display = {display}/>
            <MainQuiz clickIt = {clickIt}  display = {display}/>
        </div>
    )
    
    
}