import React,{useState} from 'react';

function QuizQuestion() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]=useState(0);
  const [showScore,setShowScore]=useState(false);

  const QuestionBank=[
    {
      Question:"Who is the PM of India?",
      AnswerText:[
        {Answer:"Amit shah", isCorrect:true, number:3},
        {Answer:"Modi", isCorrect:true,number:4},
        {Answer:"Amit shah", isCorrect:true,number:2},
        {Answer:"Amit shah", isCorrect:true,number:1}
      ]
    },
    {
      Question:"Who is the PM of India?",
      AnswerText:[
        {Answer:"Amit shah", isCorrect:true, number:3},
        {Answer:"Modi", isCorrect:true,number:4},
        {Answer:"Amit shah", isCorrect:true,number:2},
        {Answer:"Amit shah", isCorrect:true,number:1}
      ]
    },
    {
      Question:"Who is the PM of India?",
      AnswerText:[
        {Answer:"Amit shah", isCorrect:true, number:3},
        {Answer:"Modi", isCorrect:true,number:4},
        {Answer:"Amit shah", isCorrect:true,number:2},
        {Answer:"Amit shah", isCorrect:true,number:1}
      ]
    },
  ]
  const handleAnswer =(isCorrect,number)=>{
    if(isCorrect)
    {
      setScore(score+number);
    }
    console.log(number)
    const nextQuestion = currentQuestion+1;
    if(nextQuestion<QuestionBank.length)
    {
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  const resetQuiz =()=>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }
  
  

  return (
    <>
    
    {
     showScore 
            ?
           <>
           <div> You have a {score} out of {QuestionBank.length}</div>
           <button type='submit' onClick={resetQuiz}>Play Again</button>
           </>
         : 
         <>
          <div className='question----'>
          <div className='question-num'>
            <span>{currentQuestion+1}</span>/{QuestionBank.length}
          </div>
          <div className='question-text'>
            {QuestionBank[currentQuestion].Question}
          </div>
          <div className='answer'>
            {QuestionBank[currentQuestion].AnswerText.map((answer)=>(
              <button onClick={()=>handleAnswer(answer.isCorrect,answer.number)}>{answer.Answer}</button>
            ))}
          </div>
          
          </div>
         </>
  }
    </>
  );
}

export default QuizQuestion;
