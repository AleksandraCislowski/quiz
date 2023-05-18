import styled from "@emotion/styled";
import { Box } from "@mui/system";
import unicorn from "./pictures/unicorn.jpg";
import { Typography } from "@mui/material";

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
      if (winners[0] === "A")
        return (
          <StyledBox sx={{ backgroundImage: `url(${unicorn})` }}>
            <h2>UNICORN</h2>
            <Typography variant='subtitle1' color='white'>
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
              Pięć wieków później zaczął być używany przemyśle elektronicznym,
              pozostając praktycznie niezmienionym. Spopularyzował się w latach
              60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających
              fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje
              Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na
              komputerach osobistych, jak Aldus PageMaker
            </Typography>
          </StyledBox>
        );
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

const StyledBox = styled(Box)`
  max-width: 700px;
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
`;
