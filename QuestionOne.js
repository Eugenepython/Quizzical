import React from 'react';
export default function QuestionOne(props) {

function handleFirstClick(index) {
  const updatedOptions = props.firstOptions.map((option, i) => {
    if (i === index) {
      props.setQ1pick(props.firstOptions[i].answer);
      return { ...option, isChosen: true };
    } else {
      return { ...option };
    }
  });
  props.setFirstPickedOptions(updatedOptions);
  const trueIndex = updatedOptions.findIndex((option) => option.isTrue === true);
  const pickedIndex = updatedOptions.findIndex((option) => option.isChosen === true);
  props.setQ1correctIndex(trueIndex);
  props.setQ1index(pickedIndex)
  props.setOnegotClicked(true)
  //console.log("Index:", index);
}

let buttons = ''
if (props.firstOptions){
buttons = props.firstOptions.map((option, index) => {
    //console.log(option)
    return (
        <div key = {index}>
  <button 
  disabled={props.isSubmitted ? true : false}
  onClick={() => handleFirstClick(index)} 
  className={
  props.oneRightOrWrong === null 
    ? 'notChosenClass' 
    : props.oneRightOrWrong && option.isTrue //if i get question right and this button is the true on
      ? 'chosenClass' 
      : props.oneRightOrWrong === false && option.isTrue 
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
    <div className = 'firstQ'>{props.firstQuestion}</div>
    <div className = 'choiceHolder1'>{buttons}</div>
    <div className = 'chosenAnswer1'>{props.Q1pick} {props.isSubmitted && props.got1Right ? '\u2714' : props.isSubmitted && props.got1Right === false ? '\u2718' : ''}</div>
    <div className='firstLine'></div>
    </div>
  )
}
