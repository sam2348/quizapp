import React,{useState} from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import QuizQuestion from "./Components/QuizQuestion";
import T from "./Components/T";
import Try from './Components/Try';

function App() {
  // const [gameState,setGameState]=useState("home")
  return (
    <div className="App">
      <h1>Quiz App</h1> 
      {/* < QuizQuestion /> */}
      <Try />
      < AddUser />
      
    </div>
  );
}

export default App;
