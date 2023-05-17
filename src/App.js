import React, { useState } from "react";
import Hero from "./components/Hero";
import { quiz } from "./components/Quiz";

function App() {
  const [pageNumber, setPageNumber] = useState(-1);

  const pageNumberUp = () => {
    setPageNumber(pageNumber + 1);
  };

  return <> {pageNumber === -1 && <Hero pageNumberUp={pageNumberUp}></Hero>}</>;
}

export default App;
