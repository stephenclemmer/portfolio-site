import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import { autocompleteClasses } from '@mui/material';

export default function About() {
  return (
    <>
      <Container
        id="about"
        maxWidth="100%"
        sx={{ paddingTop: "80px" }}
      >


        <Box
          sx={{
            height: "auto",
            width: "auto"
          }}
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
              display: "flex",
              flexDirection: "row",
              width: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "auto"
              }}
            >
              <Paper
                sx={{
                  alignItems: 'left'
                }}
                elevation={0}>
                <Container>
                  <Box

                    sx={{
                      height: "auto"
                    }}
                  >
                    Hi, I'm Stephen. I love software development's culture of collaboration creativity, and continuous improvement, and I value its ability to bring ideas from concept to reality with minimal resources. Each day, software development challenges me to improve my skills and learn new things.
                  </Box>
                </Container>
                <Container>
                  <Box

                    sx={{
                      height: "auto",
                      paddingTop: "15px"
                    }}
                  >
                    I value making applications that are accessible to all people, and I enjoy thinking about all of the different types of people who may encounter a product or service I work on. For other programmers, I seek to leave a legacy of clean, human-readable code. For end users I often ask myself what might be done to increase the value that they receive from an application so that they might feel compelled to share their outstanding experience with their friends.
                  </Box>
                  <Box

                    sx={{
                      height: "auto",
                      paddingTop: "15px"
                    }}
                  >
                    I have worked in entreprenurial environments as a project manager, product manager, and team leader. In 2022 I returned to school where I completed a five-month bootcamp for Advanced Software Development in Full-Stack JavaScript. some of the technologies that I've been working with recently include:
                  </Box>
                </Container>

                <Container
                  sx={{
                    paddingTop: "15px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "row",
                    width: "auto"
                  }}
                >
                  <Box
                    sx={{
                      height: "auto",
                      margin: "auto"
                    }}
                  >
                    <Grid container>
                      <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>MaterialUI</li>
                      </ul>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      height: "auto",
                      margin: "auto"
                    }}
                  >
                    <Grid container>
                      <ul>
                        <li>Bootstrap</li>
                        <li>MongoDB</li>
                        <li>AWS</li>
                        <li>Axios</li>
                      </ul>
                    </Grid>
                  </Box>
                </Container>
              </Paper>
            </Box>
          </Container>
        </Box>

      </Container>
    </>
  );
}