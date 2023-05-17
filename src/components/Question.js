const Question = (props) => {
  return (
    <div>
      <p>{props.question.question}</p>
      <div>
        {props.question.choices.map((option) => (
          <button onClick={() => props.answer(option.key)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
