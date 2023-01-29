import React, { useState} from "react";

function QuizForm(props) {
  const [formData, setFormData] = useState({
    prompt: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    correctIndex: 0,
  });
  
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/questions",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(
      {
        "prompt" : formData.prompt,
        "answers" : [formData.ans1,
          formData.ans2,
          formData.ans3,
          formData.ans4,
        ],
        "correctIndex" : formData.correctIndex
      })
      
    })
    console.log(formData);
  }
  return (
    <section>
      <h1>New Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="ans1"
            value={formData.ans1}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="ans2"
            value={formData.ans2}
            onChange={handleChange}
          />
        </label>
        <label>
          Ans 3:
          <input
            type="text"
            name="ans3"
            value={formData.ans3}
            onChange={handleChange}
          />
        </label>
        <label>
          Ans 4:
          <input
            type="text"
            name="ans"
            value={formData.ans4}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Ans:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            <option value="0">{formData.ans1}</option>
            <option value="1">{formData.ans2}</option>
            <option value="2">{formData.ans3}</option>
            <option value="3">{formData.ans4}</option>
          </select>
        </label>
        <button type="submit">Add Quiz</button>
      </form>
    </section>
  );
}

export default QuizForm;