import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
      Hello. This is a welcome message
      </Typography>
    </Container>
  );
}