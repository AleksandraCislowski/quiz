import React, { useState } from "react";
import Hero from "./components/Hero";
import { quiz } from "./components/quiz";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [pageNumber, setPageNumber] = useState(-1);

  const pageNumberUp = () => {
    setPageNumber(pageNumber + 1);
  };

  const resetQuiz = () => {
    setPageNumber(-1);
  };

  return (
    <>
      <>{pageNumber === -1 && <Hero pageNumberUp={pageNumberUp} />}</>
      <>
        {quiz.map((question, index) => (
          <>
            {pageNumber === index && (
              <Question question={question} pageNumberUp={pageNumberUp} />
            )}
          </>
        ))}
      </>
      <>{pageNumber === quiz.length && <Result resetQuiz={resetQuiz} />}</>
    </>
  );
}

export default App;
