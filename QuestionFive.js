import React from 'react';
export default function QuestionFive(props) {

function handleFirstClick(index) {
  const updatedOptions = props.fifthOptions.map((option, i) => {
    if (i === index) {
      props.setQ5pick(props.fifthOptions[i].answer);
      return { ...option, isChosen: true };
    } else {
      return { ...option };
    }
  });
  props.setFifthPickedOptions(updatedOptions);
  const trueIndex = updatedOptions.findIndex((option) => option.isTrue === true);
  const pickedIndex = updatedOptions.findIndex((option) => option.isChosen === true);
  props.setQ5correctIndex(trueIndex);
  props.setQ5index(pickedIndex)
  props.setFivegotClicked(true)
  //console.log("Index:", index);
}

let buttons = ''
if (props.fifthOptions){
buttons = props.fifthOptions.map((option, index) => {
    //console.log(option)
    return (
        <div key = {index}>
  <button 
  disabled={props.isSubmitted ? true : false}
  onClick={() => handleFirstClick(index)} 
  className={
  props.fiveRightOrWrong === null 
    ? 'notChosenClass' 
    : props.fiveRightOrWrong && option.isTrue //if i get question right and this button is the true on
      ? 'chosenClass' 
      : props.fiveRightOrWrong === false && option.isTrue 
      ? 'wrongClass' 
      : ''   // if get the question wrong and this button is true
}
  >
    {option.answer}
  </button>
  </div>
    )
})
}

//console.log(props.Q1pick)
  return (
    <div>
    <div className = 'fifthQ'>{props.fifthQuestion}</div>
    <div className = 'choiceHolder5'>{buttons}</div>
    <div className = 'chosenAnswer5'>{props.Q5pick} {props.isSubmitted && props.got5Right ? '\u2714' : props.isSubmitted && props.got5Right === false ? '\u2718' : ''}</div>
    <div className='fifthLine'></div>
    </div>
  )
}