import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Welcome() {
  return (
    <Container
      id="home"
      sx={{marginTop: "64px"}}
    >
      <Typography 
        variant='h3'
        color='secondary'
        align='center'
        gutterBottom
      > 
      Hey there, I'm
      </Typography>
      <Typography 
        variant='h3'
        color='secondary'
        align='center'
        gutterBottom
      > 
      Stephen Clemmer
      </Typography>

      <Typography 
        variant='h6'
        color='secondary'
        align='center'
        gutterBottom
      > 
      I'm a software developer with a passion for understanding how to turn customers into devoted fanatics.
      </Typography>
    </Container>
  );
}