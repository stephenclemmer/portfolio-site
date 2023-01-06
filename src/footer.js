import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <>
      <Container maxWidth="sm">

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {/* <Paper elevation={0} /> */}


          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}> This is where the footer goes</Paper>
          {/* <Paper elevation={3} /> */}
        </Box>
      </Container>
    </>
  );
}