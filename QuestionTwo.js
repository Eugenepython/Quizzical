import React from 'react';
export default function QuestionTwo(props) {

function handleFirstClick(index) {
  const updatedOptions = props.secondOptions.map((option, i) => {
    if (i === index) {
      props.setQ2pick(props.secondOptions[i].answer);
      return { ...option, isChosen: true };
    } else {
      return { ...option };
    }
  });
  props.setSecondPickedOptions(updatedOptions);
  const trueIndex = updatedOptions.findIndex((option) => option.isTrue === true);
  const pickedIndex = updatedOptions.findIndex((option) => option.isChosen === true);
  props.setQ2correctIndex(trueIndex);
  props.setQ2index(pickedIndex)
  props.setTwogotClicked(true)
  //console.log("Index:", index);
}

let buttons = ''
if (props.secondOptions){
buttons = props.secondOptions.map((option, index) => {
    //console.log(option)
    return (
        <div key = {index}>
  <button 
  disabled={props.isSubmitted ? true : false}
  onClick={() => handleFirstClick(index)} 
  className={
  props.twoRightOrWrong === null 
    ? 'notChosenClass' 
    : props.twoRightOrWrong && option.isTrue //if i get question right and this button is the true on
      ? 'chosenClass' 
      : props.twoRightOrWrong === false && option.isTrue 
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
    <div className = 'secondQ'>{props.secondQuestion}</div>
    <div className = 'choiceHolder2'>{buttons}</div>
    <div className = 'chosenAnswer2'>{props.Q2pick} {props.isSubmitted && props.got2Right ? '\u2714' : props.isSubmitted && props.got2Right === false ? '\u2718' : ''}</div>
    <div className='secondLine'></div>
    </div>
  )
}
