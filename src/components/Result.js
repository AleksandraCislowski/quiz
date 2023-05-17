const Result = (props) => {
  const displayResult = () => {
    const biggestValue = [props.a, props.b, props.c, props.d].sort(
      (a, b) => b - a
    )[0];
    let winners = [];
    if (props.a === biggestValue) winners = [...winners, "A"];
    if (props.b === biggestValue) winners = [...winners, "B"];
    if (props.c === biggestValue) winners = [...winners, "C"];
    if (props.d === biggestValue) winners = [...winners, "D"];
    if (winners.length === 1) {
      if (winners[0] === "A") return "1";
      if (winners[0] === "B") return "2";
      if (winners[0] === "C") return "3";
      if (winners[0] === "D") return "4";
    } else {
      return "5";
    }
  };

  return (
    <div>
      <div>{displayResult()}</div>
      <button onClick={props.resetQuiz}>Retake the quiz!</button>
    </div>
  );
};

export default Result;
