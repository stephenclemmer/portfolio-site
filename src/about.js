import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';

export default function About() {
  return (
    <>
      <Container
        id="about"
        maxWidth="100%"
        margin="auto"
        sx={{
          paddingTop: "80px",
          margin: "auto"
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "auto",
            align: "center"
          }}
        >
          <Typography
            component='h2'
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
                width: "auto",
              }}
            >
              <Paper
                sx={{
                  alignItems: 'left',
                  backgroundColor: '#000',
                  borderRadius: 4
                }}
                elevation={0}>
                <Container>
                  <Box
                    sx={{
                      height: "auto",
                      margin: 2
                    }}
                  >
                    <Typography
                      component='h3'
                      align="left"
                      variant="h6"
                    >
                      Hi, I'm Stephen, a full-stack software developer.
                    </Typography>
                  </Box>
                </Container>

                <Container>
                  <Box
                    sx={{
                      height: "auto",
                      margin: 2
                    }}
                  >
                    <Typography
                      component='h3'
                      align="left"
                      variant="h6"
                    >
                      I love software development's culture of collaboration, creativity, and continuous improvement. I get excited about its potential to bring ideas from concept to reality with minimal resources.
                    </Typography>
                  </Box>
                </Container>

                <Container>
                  <Box

                    sx={{
                      height: "auto",
                      paddingTop: "15px",
                      margin: 2
                    }}
                  >
                    <Typography
                      component='h3'
                      variant="h6"
                      align="left"
                    >
                      I value making applications that are accessible. For end-users I seek to improve an application's utility so users will feel compelled to share their experience with friends. For other programmers, I seek to leave a legacy of clean, human-readable code.
                    </Typography>
                  </Box>
                  <Box

                    sx={{
                      height: "auto",
                      paddingTop: "15px",
                      margin: 2
                    }}
                  >
                    <Typography
                      component='h3'
                      variant="h6"
                      align="left"
                    >
                      I have worked in entreprenurial environments as a project manager, product manager, and team leader. In 2022 I completed a five-month bootcamp for Advanced Software Development in Full-Stack JavaScript. Some of the technologies that I've been working with recently include:
                    </Typography>
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
                        <li><Typography component='h3' variant="h6" align="left">JavaScript</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">TypeScript</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">React</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">MaterialUI</Typography></li>
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
                        <li><Typography component='h3' variant="h6" align="left">Node.js</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">Express</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">Postgres</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">Socket.io</Typography></li>
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
                        <li><Typography component='h3' variant="h6" align="left">AWS S3</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">AWS EC2</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">AWS Lambda</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">Elastic Beanstalk</Typography></li>
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
                        <li><Typography component='h3' variant="h6" align="left">Bootstrap</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">MongoDB</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">DynamoDB</Typography></li>
                        <li><Typography component='h3' variant="h6" align="left">Axios</Typography></li>
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