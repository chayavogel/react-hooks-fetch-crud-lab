import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {questions, deleteQuestion, updateAnswerChange } ) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
        return <QuestionItem key={question.id} question={question} deleteQuestion={deleteQuestion} updateAnswerChange={updateAnswerChange} />
      })}
      </ul>
    </section>
  );
}

export default QuestionList;
