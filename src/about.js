import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Container from '@mui/material/Container';

export default function About() {
  return (
    <>
      <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 'auto',
            height: 'auto',
          },
        }}
      >
        {/* <Paper elevation={0} /> */}
        <Container>
          <Paper 
        sx={{margin: 'auto',
        alignItems: 'center'}}
        elevation={0}> This is where information about Stephen goes</Paper>
        {/* <Paper elevation={3} /> */}
        </Container>
      </Box>
      </Container>
    </>
  );
}