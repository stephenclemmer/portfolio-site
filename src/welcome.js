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
        component='h1'
        variant='h3'
        color='secondary'
        align='center'
        gutterBottom
      >
        Hey there, I'm
      </Typography>
      <Typography
        component='h1'
        variant='h3'
        color='secondary'
        align='center'
        gutterBottom
      >
        Stephen Clemmer.
      </Typography>

      <Typography
        sx={{
          // backgroundColor: '#000',
          borderRadius: 4
        }}
        component='h1'
        variant='h5'
        color='secondary'
        align='center'
        width='auto'
        gutterBottom
      >
        Let's turn your customers into devoted fanatics.
      </Typography>
    </Container>
  );
}