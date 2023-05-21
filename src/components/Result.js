import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import unicorn from "./pictures/unicorn.jpg";
import mermaid from "./pictures/mermaid.jpg";
import dragon from "./pictures/dragon.jpg";
import satyr from "./pictures/satyr.jpg";
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
            <Typography variant='h3'>UNICORN</Typography>
            <StyledBox3>
              <Typography variant='subtitle1'>
                The Unicorn is a highly intelligent creature described as
                outgoing, energetic, and smart – a unique wild horse. It is seen
                as a symbol of chastity, purity, grace, peace and tranquillity.
                Unicorns, if left undisturbed, are immortal and will never
                perish from old age. Its horn was described as having the power
                to render poisoned water potable and to heal sickness.
              </Typography>
            </StyledBox3>
          </StyledBox>
        );
      if (winners[0] === "B")
        return (
          <StyledBox sx={{ backgroundImage: `url(${mermaid})` }}>
            <Typography variant='h3'>MERMAID</Typography>
            <StyledBox3>
              <Typography variant='subtitle1'>
                These headstrong creatures crave the freedom that the sea
                provides, swimming where they please, whenever they choose.
                Their fierce independence and refusal to conform are combined
                with a headstrong personality. Mermaids hold steadfastly to
                their values and won't compromise when it comes to how they live
                their lives.
              </Typography>
            </StyledBox3>
          </StyledBox>
        );
      if (winners[0] === "C")
        return (
          <StyledBox sx={{ backgroundImage: `url(${dragon})` }}>
            <Typography variant='h3'>DRAGON</Typography>
            <StyledBox3>
              <Typography variant='subtitle1'>
                Dragons are renowned for their magical abilities, which differ
                depending on what part of the world you're in. They are thought
                to have blood with magical properties, the ability to breathe
                fire, flying powers, the power of speech, and sometimes immense
                wisdom. They are charismatic, intelligent, confident, powerful
                and naturally lucky and gifted. In everything that they do, they
                tend to do it to the best of their ability with high standards.
              </Typography>
            </StyledBox3>
          </StyledBox>
        );
      if (winners[0] === "D")
        return (
          <StyledBox sx={{ backgroundImage: `url(${satyr})` }}>
            <Typography variant='h3'>SATYR</Typography>
            <StyledBox3>
              <Typography variant='subtitle1'>
                Satyrs were characterized by their ribaldry and were known as
                lovers of wine, music, dancing, and women. In Roman culture
                satyrs were known as fauns, but were described as being friendly
                and playful. At their best, satyrs are joyous and whimsical, at
                their worst they're selfish and cruel. Most satyrs simply wander
                wherever their whims take them, following impulses and living
                off the land. When they congregate, it's usually for a “revel”.
              </Typography>
            </StyledBox3>
          </StyledBox>
        );
    } else {
      return (
        <StyledBox sx={{ backgroundImage: `url(${pegasus})` }}>
          <Typography variant='h3'>PEGASUS</Typography>
          <StyledBox3>
            <Typography variant='subtitle1'>
              Pegasus was represented as a goodhearted, gentle creature,
              somewhat naive but always eager to help. For his service and
              loyalty, Zeus honored him with a special immortality turning
              Pegasus into a constellation on the last day of his life. He could
              pass between the mortal and immortal realms and create springs of
              water with his hooves. His wings clapped like thunder if he was
              angry.
            </Typography>
          </StyledBox3>
        </StyledBox>
      );
    }
  };

  return (
    <StyledBox2>
      <Box>{displayResult()}</Box>
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

  & h3 {
    background-color: rgba(200, 200, 200, 0.629);
    padding: 1rem;
    color: rgba(0, 20, 171, 1);
    border-radius: 8px;
  }
`;

const StyledBox2 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledBox3 = styled(Box)`
  background-color: rgba(0, 0, 0, 0.478);
  padding: 1.5rem;
  margin: 3rem;
  font-weight: bolder;
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 8px;
`;
