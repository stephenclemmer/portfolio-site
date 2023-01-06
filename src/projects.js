import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'

export default function Projects() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
          <Paper elevation={3}> Project 1</Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}> Project 2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}> Project 3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}