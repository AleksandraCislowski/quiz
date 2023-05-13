import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

const Hero = () => {
  return (
    <StyledBox>
      <h1>Welcome to QuizME!</h1>
      <p>
        Answer the following questions to learn which mythical creature suit you
        the best!
      </p>
      <Button variant='contained'>Contained</Button>
    </StyledBox>
  );
};

export default Hero;

const StyledBox = styled(Box)`
  max-width: 700px;
  background-color: azure;
`;
