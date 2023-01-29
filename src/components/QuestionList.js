import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionDataArray, setquestionDataArray] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:4000/questions`)
    .then((response)=> response.json())
      .then((data)=> setquestionDataArray(data))
  },[])

  function deletingQuestionInstate(myId){
    fetch(`http://localhost:4000/questions/${myId}`,{
        method: "DELETE",
       }).then((response)=> response.json())
       .then(()=> {
    const updatedArray = questionDataArray.filter((element)=> 
    element.id !== myId )
    console.log(updatedArray)
    setquestionDataArray(updatedArray)
       })
  }
  const displayQuestions = questionDataArray.map((element)=> {return(
    <QuestionItem key={element.id} question={element} deletedQuestion={deletingQuestionInstate} />
  )
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
      {displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;