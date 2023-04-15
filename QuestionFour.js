import React from 'react';
export default function QuestionFour(props) {

function handleFirstClick(index) {
  const updatedOptions = props.fourthOptions.map((option, i) => {
    if (i === index) {
      props.setQ4pick(props.fourthOptions[i].answer);
      return { ...option, isChosen: true };
    } else {
      return { ...option };
    }
  });
  props.setFourthPickedOptions(updatedOptions);
  const trueIndex = updatedOptions.findIndex((option) => option.isTrue === true);
  const pickedIndex = updatedOptions.findIndex((option) => option.isChosen === true);
  props.setQ4correctIndex(trueIndex);
  props.setQ4index(pickedIndex)
  props.setFourgotClicked(true)
  //console.log("Index:", index);
}

let buttons = ''
if (props.fourthOptions){
buttons = props.fourthOptions.map((option, index) => {
    //console.log(option)
    return (
        <div key = {index}>
  <button 
  disabled={props.isSubmitted ? true : false}
  onClick={() => handleFirstClick(index)} 
  className={
  props.fourRightOrWrong === null 
    ? 'notChosenClass' 
    : props.fourRightOrWrong && option.isTrue //if i get question right and this button is the true on
      ? 'chosenClass' 
      : props.fourRightOrWrong === false && option.isTrue 
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
    <div className = 'fourthQ'>{props.fourthQuestion}</div>
    <div className = 'choiceHolder4'>{buttons}</div>
    <div className = 'chosenAnswer4'>{props.Q4pick} {props.isSubmitted && props.got4Right ? '\u2714' : props.isSubmitted && props.got4Right === false ? '\u2718' : ''}</div>
    <div className='fourthLine'></div>
    </div>
  )
}
