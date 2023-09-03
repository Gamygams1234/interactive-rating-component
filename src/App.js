import "./App.scss";
import { useState } from "react";
import Card from "./Card"
import AnswerCard from "./AnswerCard";

function App() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const handleClick =(e) =>{
    document.querySelector(".rating-indicator.active")?.classList.remove("active");
    if(e.target.classList.contains("rating-indicator")){
      e.target.classList.add("active")                       
    }else{
      e.target.parentElement.classList.add("active")
    }
  
  
    setRating(e.target.innerText);

  }
  
  const submitRating = () =>{
    if (rating !==0){
      setSubmitted(true);
    }
  }

  return (
    <div className="App container">
    {!submitted && <Card handleClick = {handleClick} submitRating = {submitRating}/>}
    {submitted &&  <AnswerCard rating = {rating} />}

    </div>
  );
}

export default App;
