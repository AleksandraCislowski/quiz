import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import p2 from "./pictures/p2.jpg";

const Question = (props) => {
  return (
    <StyledBox sx={{ backgroundImage: `url(${p2})` }}>
      <Typography variant='h4'>{props.question.question}</Typography>
      <StyledBox2>
        {props.question.choices.map((option) => (
          <Button
            sx={{ m: 2 }}
            variant='contained'
            onClick={() => props.answer(option.key)}
          >
            {option.text}
          </Button>
        ))}
      </StyledBox2>
    </StyledBox>
  );
};

export default Question;

const StyledBox = styled(Box)`
  max-width: 700px;
  padding: 3rem;
  margin: 3rem;
  height: 80vh;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const StyledBox2 = styled(Box)`
  display: flex;
  align-items: left;
  flex-direction: column;
`;
