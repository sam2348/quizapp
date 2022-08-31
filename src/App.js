import React,{useState} from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import QuizQuestion from "./Components/QuizQuestion";
import Try from './Components/Try';
import Home from './Components/Issue/Home';

function App() {
  // const [gameState,setGameState]=useState("home")
  return (
    <div className="App">
      <h1>Quiz App</h1> 
      {/* < QuizQuestion /> */}
       <Try /> 
      < AddUser /> 
      {/* < Home /> */}
    </div>
  );
}

export default App;
