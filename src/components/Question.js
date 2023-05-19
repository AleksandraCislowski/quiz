import { Button, Typography } from "@mui/material";

const Question = (props) => {
  return (
    <div>
      <Typography variant='subtitle1'>{props.question.question}</Typography>
      <div>
        {props.question.choices.map((option) => (
          <Button variant='text' onClick={() => props.answer(option.key)}>
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Question;
