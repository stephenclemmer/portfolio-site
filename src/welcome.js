import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Welcome() {
  return (
    <Container
      id="home"
      sx={{
        paddingTop: "80px", 
        width: "100%",
        height: "300px"
      }}
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
      a software developer passionate about what it takes to turn customers into devoted fanatics.
      </Typography>
    </Container>
  );
}