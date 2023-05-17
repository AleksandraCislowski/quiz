const Result = (props) => {
  return (
    <div>
      <p>End</p>
      <button onClick={props.resetQuiz}>Retake the quiz!</button>
    </div>
  );
};

export default Result;
