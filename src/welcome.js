import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Welcome() {
  return (
    <Container>
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
      I'm a software developer with a passion for understanding how users interact with products and services.
      </Typography>
    </Container>
  );
}