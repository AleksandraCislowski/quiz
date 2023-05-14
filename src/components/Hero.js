import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <StyledBox2>
      <StyledBox>
        <Typography variant='h2' color='primary'>
          Welcome to QuizME!
        </Typography>
        <Typography variant='subtitle1'>
          Answer the following questions to learn which mythical creature suit
          you the best!
        </Typography>
      </StyledBox>
      <Button variant='contained'>Let's get started!</Button>
    </StyledBox2>
  );
};

export default Hero;

const StyledBox = styled(Box)`
  max-width: 700px;
  height: 200px;
  background-color: azure;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledBox2 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
