import React from 'react'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import QuestionFive from './QuestionFive'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export default function MainQuiz(props){
  


const [firstQuestion, setFirstQuestion] = React.useState(null)
const [secondQuestion, setSecondQuestion] = React.useState(null)
const [thirdQuestion, setThirdQuestion] = React.useState(null)
const [fourthQuestion, setFourthQuestion] = React.useState(null)
const [fifthQuestion, setFifthQuestion] = React.useState(null)

const [firstOptions, setFirstOptions] = React.useState(null)
const [secondOptions, setSecondOptions] = React.useState(null)
const [thirdOptions, setThirdOptions] = React.useState(null)
const [fourthOptions, setFourthOptions] = React.useState(null)
const [fifthOptions, setFifthOptions] = React.useState(null)

const [isChosen, setisChosen] = React.useState(false)
const [isSubmitFinished, setIsSubmitFinished] = React.useState(false);

const [firstPickedOptions, setFirstPickedOptions] = React.useState(0)
const [secondPickedOptions, setSecondPickedOptions] = React.useState(0)
const [thirdPickedOptions, setThirdPickedOptions] = React.useState(0)
const [fourthPickedOptions, setFourthPickedOptions] = React.useState(0)
const [fifthPickedOptions, setFifthPickedOptions] = React.useState(0)

const [Q1index, setQ1index] = React.useState(null)
const [Q2index, setQ2index] = React.useState(null)
const [Q3index, setQ3index] = React.useState(null)
const [Q4index, setQ4index] = React.useState(null)
const [Q5index, setQ5index] = React.useState(null)

const [Q1pick, setQ1pick] = React.useState(null)
const [Q2pick, setQ2pick] = React.useState(null)
const [Q3pick, setQ3pick] = React.useState(null)
const [Q4pick, setQ4pick] = React.useState(null)
const [Q5pick, setQ5pick] = React.useState(null)

const [Q1correctIndex, setQ1correctIndex] = React.useState(null)
const [Q2correctIndex, setQ2correctIndex] = React.useState(null)
const [Q3correctIndex, setQ3correctIndex] = React.useState(null)
const [Q4correctIndex, setQ4correctIndex] = React.useState(null)
const [Q5correctIndex, setQ5correctIndex] = React.useState(null)


const [oneRightOrWrong, setoneRightOrWrong] = React.useState(null)
const [twoRightOrWrong, settwoRightOrWrong] = React.useState(null)
const [threeRightOrWrong, setThreeRightOrWrong] = React.useState(null)
const [fourRightOrWrong, setFourRightOrWrong] = React.useState(null)
const [fiveRightOrWrong, setFiveRightOrWrong] = React.useState(null)

const [isSubmitted, setIsSubmitted] = React.useState(false)

const [got1Right, setGot1Right] = React.useState(false)
const [got2Right, setGot2Right] = React.useState(false)
const [got3Right, setGot3Right] = React.useState(false)
const [got4Right, setGot4Right] = React.useState(false)
const [got5Right, setGot5Right] = React.useState(false)

const [oneGotClicked, setOnegotClicked] = React.useState(false)
const [twoGotClicked, setTwogotClicked] = React.useState(false)
const [threeGotClicked, setThreegotClicked] = React.useState(false)
const [fourGotClicked, setFourgotClicked] = React.useState(false)
const [fiveGotClicked, setFivegotClicked] = React.useState(false)

const [count, changeCount] = React.useState(0)

React.useEffect(() => { 
fetch('https://opentdb.com/api.php?amount=5&type=multiple')
.then(response => response.json())
.then(data => {
const parser = new DOMParser();
const questionOne = parser.parseFromString(data.results[0].question, 'text/html').body.textContent;
const questionTwo = parser.parseFromString(data.results[1].question, 'text/html').body.textContent;
const questionThree = parser.parseFromString(data.results[2].question, 'text/html').body.textContent;
const questionFour = parser.parseFromString(data.results[3].question, 'text/html').body.textContent;
const questionFive = parser.parseFromString(data.results[4].question, 'text/html').body.textContent;

setFirstQuestion(questionOne)
setSecondQuestion(questionTwo)
setThirdQuestion(questionThree)
setFourthQuestion(questionFour)
setFifthQuestion(questionFive)



const wrongOne = data.results[0].incorrect_answers.map(answer => {
const name = parser.parseFromString(answer, 'text/html').body.textContent;
return {
answer: name,
isTrue: false
}
})

const wrongTwo = data.results[1].incorrect_answers.map(answer => {
  const name = parser.parseFromString(answer, 'text/html').body.textContent;
  return {
    answer: name,
    isTrue: false
  }
})
const wrongThree = data.results[2].incorrect_answers.map(answer => {
  const name = parser.parseFromString(answer, 'text/html').body.textContent;
  return {
    answer: name,
    isTrue: false,
  }
})
const wrongFour = data.results[3].incorrect_answers.map(answer => {
  const name = parser.parseFromString(answer, 'text/html').body.textContent;
  return {
    answer: name,
    isTrue: false
  }
})
const wrongFive = data.results[4].incorrect_answers.map(answer => {
  const name = parser.parseFromString(answer, 'text/html').body.textContent;
  return {
    answer: name,
    isTrue: false
  }
})

 const decodedR1 = parser.parseFromString(data.results[0].correct_answer, 'text/html').body.textContent;
 const rightOne = {
  answer: decodedR1,
  isTrue: true
};
 const decodedR2 = parser.parseFromString(data.results[1].correct_answer, 'text/html').body.textContent;
 const rightTwo = {
  answer: decodedR2,
  isTrue: true
}; 
 const decodedR3 = parser.parseFromString(data.results[2].correct_answer, 'text/html').body.textContent;
 const rightThree = {
  answer: decodedR3,
  isTrue: true
}; 
 const decodedR4 = parser.parseFromString(data.results[3].correct_answer, 'text/html').body.textContent;
 const rightFour = {
  answer: decodedR4,
  isTrue: true
}; 
 const decodedR5 = parser.parseFromString(data.results[4].correct_answer, 'text/html').body.textContent;
 const rightFive = {
  answer: decodedR5,
  isTrue: true
}; 

let answersOne = shuffleArray([...wrongOne, rightOne]).map(answer => {
  return { ...answer, isChosen: false };
})
let answersTwo = shuffleArray([...wrongTwo, rightThree]).map(answer => {
  return { ...answer, isChosen: false };
})
let answersThree = shuffleArray([...wrongThree, rightThree]).map(answer => {
  return { ...answer, isChosen: false };
})
let answersFour = shuffleArray([...wrongFour, rightFour]).map(answer => {
  return { ...answer, isChosen: false };
})
let answersFive = shuffleArray([...wrongFive, rightFive]).map(answer => {
  return { ...answer, isChosen: false };
})
//console.log(answersOne)

setFirstOptions(answersOne);
setSecondOptions(answersTwo);
setThirdOptions(answersThree);
setFourthOptions(answersFour);
setFifthOptions(answersFive);
  

})
.catch(error => {
console.error(error);
})
}, []);

function submit() {
  if (oneGotClicked === true && twoGotClicked === true && threeGotClicked === true && fourGotClicked === true && fiveGotClicked === true) {
    setIsSubmitted(true);
    
    if (Q1index === Q1correctIndex) {
      setoneRightOrWrong(true); 
      setGot1Right(true);
   changeCount((prevCount) => prevCount + 1);
      console.log("correct on 1");
    } else {
      console.log("wrong on 1"); 
      setoneRightOrWrong(false);
    }

    if (Q2index === Q2correctIndex) {
      settwoRightOrWrong(true); 
      setGot2Right(true);
     changeCount((prevCount) => prevCount + 1);
      console.log("correct  on 2 ");
    } else {
      console.log("wrong on 2 ");
      settwoRightOrWrong(false);
    }

    if (Q3index === Q3correctIndex) {
      setThreeRightOrWrong(true); 
      setGot3Right(true);
      changeCount((prevCount) => prevCount + 1);
      console.log("correct  on 3 ");
    } else {
      console.log("wrong on 3 ");
      setThreeRightOrWrong(false);
    }

    if (Q4index === Q4correctIndex) {
      setFourRightOrWrong(true); 
      setGot4Right(true);
    changeCount((prevCount) => prevCount + 1);
      console.log("correct  on 4 ");
    } else {
      console.log("wrong on 4 ");
      setFourRightOrWrong(false);
    }

    if (Q5index === Q5correctIndex) {
      setFiveRightOrWrong(true); 
      setGot5Right(true);
      changeCount((prevCount) => prevCount + 1);
      console.log("correct  on 5 ");
    } else {
      setFiveRightOrWrong(false);
      console.log("wrong on 5 ");
    }
  } else {
    console.log("Please answer all questions before submitting.");
  }
  setIsSubmitFinished(true)
  console.log("finished submit")
}


function reStart(){
  window.location.reload()
}
 

  return (
    <div style={{ display: props.display ? 'none' : 'block'}}  className = 'mainQuiz'>
    <QuestionOne firstQuestion = {firstQuestion} firstOptions = {firstOptions} setisChosen = {setisChosen} setFirstPickedOptions = {setFirstPickedOptions} firstPickedOptions = {firstPickedOptions} setQ1index = {setQ1index}  setQ1pick = {setQ1pick} Q1pick = {Q1pick} setQ1correctIndex = {setQ1correctIndex} oneRightOrWrong = {oneRightOrWrong}  got1Right = {got1Right} isSubmitted = {isSubmitted} setOnegotClicked = {setOnegotClicked}  />
    
    <QuestionTwo secondQuestion = {secondQuestion} secondOptions = {secondOptions} setisChosen = {setisChosen} setSecondPickedOptions = {setSecondPickedOptions} secondPickedOptions = {secondPickedOptions} setQ2index = {setQ2index}  setQ2pick = {setQ2pick} Q2pick = {Q2pick} setQ2correctIndex = {setQ2correctIndex} twoRightOrWrong = {twoRightOrWrong}  got2Right = {got2Right} isSubmitted = {isSubmitted} setTwogotClicked = {setTwogotClicked}  />


    <QuestionThree thirdQuestion = {thirdQuestion} thirdOptions = {thirdOptions} setisChosen = {setisChosen} setThirdPickedOptions = {setThirdPickedOptions} thirdPickedOptions = {thirdPickedOptions} setQ3index = {setQ3index}  setQ3pick = {setQ3pick} Q3pick = {Q3pick} setQ3correctIndex = {setQ3correctIndex} threeRightOrWrong = {threeRightOrWrong}  got3Right = {got3Right} isSubmitted = {isSubmitted} setThreegotClicked = {setThreegotClicked}  />

    <QuestionFour fourthQuestion = {fourthQuestion} fourthOptions = {fourthOptions} setisChosen = {setisChosen} setFourthPickedOptions = {setFourthPickedOptions} fourthPickedOptions = {fourthPickedOptions} setQ4index = {setQ4index}  setQ4pick = {setQ4pick} Q4pick = {Q4pick} setQ4correctIndex = {setQ4correctIndex} fourRightOrWrong = {fourRightOrWrong}  got4Right = {got4Right} isSubmitted = {isSubmitted} setFourgotClicked = {setFourgotClicked}  />
    
    <QuestionFive fifthQuestion = {fifthQuestion} fifthOptions = {fifthOptions} setisChosen = {setisChosen} setFifthPickedOptions = {setFifthPickedOptions} fifthPickedOptions = {fifthPickedOptions} setQ5index = {setQ5index}  setQ5pick = {setQ5pick} Q5pick = {Q5pick} setQ5correctIndex = {setQ5correctIndex} fiveRightOrWrong = {fiveRightOrWrong}  got5Right = {got5Right} isSubmitted = {isSubmitted} setFivegotClicked = {setFivegotClicked}  />



   <button className = 'submit' onClick={() => submit()}>Submit</button> 
   
  {isSubmitFinished ? <div className = 'score'>You scored {count}/5 !</div> : ''}
  <button className='restart' onClick={reStart}>Go Back</button>

   
    </div>
  )
}