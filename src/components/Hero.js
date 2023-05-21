import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import p1 from "./pictures/p1.jpg";

const Hero = (props) => {
  return (
    <StyledBox sx={{ backgroundImage: `url(${p1})` }}>
      <Typography variant='h2' color='primary' sx={{ m: 2 }}>
        Welcome to QuizME!
      </Typography>
      <Typography variant='subtitle1' color='white'>
        Answer the following questions to learn which mythical creature suit you
        the best!
      </Typography>
      <Button variant='contained' sx={{ m: 2 }} onClick={props.pageNumberUp}>
        Let's get started!
      </Button>
    </StyledBox>
  );
};

export default Hero;

const StyledBox = styled(Box)`
  width: 700px;
  padding: 1rem;
  margin: 3rem;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-shadow: 2px 2px 4px black;
`;
