import React, { useState } from "react";
import Hero from "./components/Hero";
import { quiz } from "./components/quiz";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [pageNumber, setPageNumber] = useState(-1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const answer = (option) => {
    if (option === "A") setA(a + 1);
    if (option === "B") setB(b + 1);
    if (option === "C") setC(c + 1);
    if (option === "D") setD(d + 1);
    pageNumberUp();
  };

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
              <Question question={question} answer={answer} />
            )}
          </>
        ))}
      </>
      <>{pageNumber === quiz.length && <Result resetQuiz={resetQuiz} />}</>
    </>
  );
}

export default App;
