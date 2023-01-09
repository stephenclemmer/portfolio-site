import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function About() {
  return (
    <>
      <Container
        id="about"
        maxWidth="sm"
        sx={{marginTop: "64px"}}
      >
        <Typography
          variant='h3'
          color='secondary'
          align='center'
          gutterBottom
        >
          About Me
        </Typography>
        <Container>
          <Paper
            sx={{
              alignItems: 'left'
            }}
            elevation={0}>
            <Container>
              I'm a software developer with a passion for how users interact with products and services. I love software development because of its power to bring ideas from concept to reality with minimal resources, and I resonate with its culture of collaboration and creativity. I especially value the opportunities it provides to improve my skills and learn new things.
            </Container>
            <Container>
              I hold a degree in Sociology-Religion from the University of Massachusetts, which led me to work in entreprenurial environments as a project manager, product manager, and team leader. In 2022 I returned to school where I completed a five-month bootcamp for Advanced Software Development in Full-Stack JavaScript. some of the technologies that I've been working with recently include:
            </Container>

            <Container>
              <Grid container>
                <Grid item xs={12}>
                  JavaScript
                </Grid>
                <Grid item xs={12}>
                  TypeScript
                </Grid>
                <Grid item xs={12}>
                  React
                </Grid>
                <Grid item xs={12}>
                  MaterialUI
                </Grid>
              </Grid>


              <Grid container>
                <Grid item xs={12}>
                  Bootstrap
                </Grid>
                <Grid item xs={12}>
                  MongoDB
                </Grid>
                <Grid item xs={12}>
                  AWS
                </Grid>
                <Grid item xs={12}>
                  Axios
                </Grid>
              </Grid>
            </Container>


          </Paper>
        </Container>

      </Container>
    </>
  );
}