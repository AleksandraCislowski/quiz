import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import unicorn from "./pictures/unicorn.jpg";
import siren from "./pictures/siren.jpg";
import dragon from "./pictures/dragon.jpg";
import centaur from "./pictures/centaur.jpg";
import pegasus from "./pictures/pegasus.jpg";

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
      if (winners[0] === "B")
        return (
          <StyledBox sx={{ backgroundImage: `url(${siren})` }}>
            <h2>SIREN</h2>
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
      if (winners[0] === "C")
        return (
          <StyledBox sx={{ backgroundImage: `url(${dragon})` }}>
            <h2>DRAGON</h2>
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
      if (winners[0] === "D")
        return (
          <StyledBox sx={{ backgroundImage: `url(${centaur})` }}>
            <h2>CENTAUR</h2>
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
    } else {
      return (
        <StyledBox sx={{ backgroundImage: `url(${pegasus})` }}>
          <h2>PEGASUS</h2>
          <Typography variant='subtitle1' color='white'>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć
            wieków później zaczął być używany przemyśle elektronicznym,
            pozostając praktycznie niezmienionym. Spopularyzował się w latach
            60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających
            fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem
            Ipsum oprogramowaniem przeznaczonym do realizacji druków na
            komputerach osobistych, jak Aldus PageMaker
          </Typography>
        </StyledBox>
      );
    }
  };

  return (
    <StyledBox2>
      <div>{displayResult()}</div>
      <Button variant='contained' onClick={props.resetQuiz}>
        Retake the quiz!
      </Button>
    </StyledBox2>
  );
};

export default Result;

const StyledBox = styled(Box)`
  width: 600px;
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

const StyledBox2 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
