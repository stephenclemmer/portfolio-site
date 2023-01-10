import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function About() {
  return (
    <>
      <Container
        id="about"
        maxWidth="100%"
        sx={{ paddingTop: "80px" }}
      >
        <Typography
          variant='h3'
          color='secondary'
          align='center'
          gutterBottom
        >
          About Me
        </Typography>
        <Container
          sx={{
            width: "700px"
          }}
        >
          <Paper
            sx={{
              alignItems: 'left'
            }}
            elevation={0}>
            <Container
              sx={{
                height: "150px"
              }}
            >
              I'm a software developer with a passion for how users interact with products and services. I love software development because of its power to bring ideas from concept to reality with minimal resources, and I resonate with its culture of collaboration and creativity. I especially value the opportunities it provides to improve my skills and learn new things.
            </Container>
            <Container
              sx={{
                height: "150px"
              }}
            >
              I have worked in entreprenurial environments as a project manager, product manager, and team leader. In 2022 I returned to school where I completed a five-month bootcamp for Advanced Software Development in Full-Stack JavaScript. some of the technologies that I've been working with recently include:
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