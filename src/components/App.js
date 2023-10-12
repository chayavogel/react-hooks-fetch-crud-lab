import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:4000/questions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then((data) => setQuestions(data))
  }, [])

  function addQuestion(formData) {
    setQuestions([...questions, formData])
  }

  function deleteQuestion(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id)
    setQuestions(updatedQuestions)
  }

  function updateAnswerChange(data) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === data.id) {
        return {
          ...question,
          correctIndex: data.correctIndex
        };
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} updateAnswerChange={updateAnswerChange}/>}
    </main>
  );
}

export default App;
