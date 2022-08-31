import React, { useState } from "react";
import axios from "axios";


function AddUser() {
  const url = "http://localhost:3001/QuestionBank"
  const [storeData,setStoreData]=useState([])
  const [addAns,setAddAns]=useState({Answer:"",isCorrect:"",number:""});
  const [questiondata, setQuestionData] = useState({
    Question:'',
    AnswerText:[]
  });

  const onClick = (e) => {
    e.preventDefault();
    axios.post(url, {
      Question: questiondata.Question,
      AnswerText: [storeData],
    });
    alert("yes")
  };
 const AddAnswer = ()=>{
  setStoreData([...storeData, addAns]);
  setAddAns('')
  alert("done")
 }
 console.warn(storeData);
  const iputhandler = (event) => {
    setQuestionData((prestate) => ({
      ...prestate,
      [event.target.name]: event.target.value,
    }));
  };

  const inputhandler = (event) => {
    setAddAns((prestate) => ({
      ...prestate,
      [event.target.name]: event.target.value,
    }));
  };


  return (
    <>
      <div className="Addmovie">
        <div className="container py-5 mt-5" id="cont">
          <h1 className="text-center mb-3" Style="font-family: 'DynaPuff', cursive; Color:Black;">Add Question</h1>
          <form className="needs-validation">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="Question"
                placeholder="Enter Question"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Correct Answer"
                name="isCorrect"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Answer"
                name="Answer"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            </div>
            <input
                type="text"    
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Marks"
                name="number"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            <div class="d-grid gap-2 col-1 mx-10 mt-2">
            <button class="btn btn-success" type="button"
                onClick={AddAnswer}
                >
                AddMore
              </button>
              </div>
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
              <button
                class="btn btn-success" type="button"
                onClick={onClick}
                >
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;