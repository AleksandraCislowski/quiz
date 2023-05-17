const Result = (props) => {
  const displayResult = () => {
    const biggestValue = [props.a, props.b, props.c, props.d].sort(
      (a, b) => b - a
    )[0];
    if (props.a === biggestValue) return "A";
    if (props.b === biggestValue) return "B";
    if (props.c === biggestValue) return "C";
    if (props.d === biggestValue) return "D";
  };

  return (
    <div>
      <div>{displayResult()}</div>
      <button onClick={props.resetQuiz}>Retake the quiz!</button>
    </div>
  );
};

export default Result;
