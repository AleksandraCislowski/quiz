const Question = (props) => {
  return (
    <div>
      <p>{props.question.question}</p>
      <button onClick={props.pageNumberUp}>Next</button>
    </div>
  );
};

export default Question;
