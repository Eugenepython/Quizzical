import React from 'react';
export default function QuestionThree(props) {

function handleFirstClick(index) {
  const updatedOptions = props.thirdOptions.map((option, i) => {
    if (i === index) {
      props.setQ3pick(props.thirdOptions[i].answer);
      return { ...option, isChosen: true };
    } else {
      return { ...option };
    }
  });
  props.setThirdPickedOptions(updatedOptions);
  const trueIndex = updatedOptions.findIndex((option) => option.isTrue === true);
  const pickedIndex = updatedOptions.findIndex((option) => option.isChosen === true);
  props.setQ3correctIndex(trueIndex);
  props.setQ3index(pickedIndex)
  props.setThreegotClicked(true)
  //console.log("Index:", index);
}

let buttons = ''
if (props.thirdOptions){
buttons = props.thirdOptions.map((option, index) => {
    //console.log(option)
    return (
        <div key = {index}>
  <button 
  disabled={props.isSubmitted ? true : false}
  onClick={() => handleFirstClick(index)} 
  className={
  props.threeRightOrWrong === null 
    ? 'notChosenClass' 
    : props.threeRightOrWrong && option.isTrue //if i get question right and this button is the true on
      ? 'chosenClass' 
      : props.threeRightOrWrong === false && option.isTrue 
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
    <div className = 'thirdQ'>{props.thirdQuestion}</div>
    <div className = 'choiceHolder3'>{buttons}</div>
    <div className = 'chosenAnswer3'>{props.Q3pick} {props.isSubmitted && props.got3Right ? '\u2714' : props.isSubmitted && props.got3Right === false ? '\u2718' : ''}</div>
    <div className='thirdLine'></div>
    </div>
  )
}
