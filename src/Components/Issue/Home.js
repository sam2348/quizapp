import React, { useEffect, useState } from "react";
import axios from "axios";



const Home = () => {
    const url = "http://localhost:3001/QuestionBank"
  const [addAns,setAddAns]=useState({Answer:"",number:""}); 
  const [questiondata, setQuestionData] = useState({

    Question:"",
    AnswerText: [],
  });
  console.log(questiondata,"aaaaa")

  console.log(addAns,"asd")
    const onClick = (e) => {
        e.preventDefault();
        axios.post(url, {
          Question:questiondata.Question,
          AnswerText:[addAns]
        });
        alert("yes")
      };
  const iputhandler = (event)=>{
    setAddAns((prestate) => ({
      ...prestate,
      [event.target.name]: event.target.value,
    }));
   };

   const inputhandler = (event)=>{
    setQuestionData((prestate) => ({
        ...prestate,
        [event.target.name]: event.target.value,
      }));
    
   
   }

  return (
    <div>
         <input
                type="text"
                className="form-control"
                name="Question"
                placeholder="Enter Question"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
              <input
                type="text"
                className="form-control"
                name="Answer"
                placeholder="Enter Question"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
              <input
                type="text"
                className="form-control"
                name="number"
                placeholder="Enter Question"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
              <button
                class="btn btn-success" type="button"
                onClick={onClick}
                >
                Button
              </button>
    </div>
  )
}

export default Home;