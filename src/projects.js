import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function Projects() {
  return (
    <Container
      id="projects"
      maxWidth="100%"
      sx={{
        paddingTop: "80px"
      }}
    >
      <Typography
        variant='h3'
        color='secondary'
        gutterBottom
      >
        Projects
      </Typography>

      <Grid container
      >
        <Grid item
          margin="auto"
        >
          <Card
            sx={{
              maxWidth: "400px",
              height: "600px",
              paddingTop: "10px",
              borderRadius: 4,
            }}
          >
            <CardActionArea
              href={'https://library-of-things.vercel.app'}
              target='_blank'
              borderRadius='4'
              sx={{
                height: '100%',
                backgroundColor: '#000',
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={require('./assets/Library-of-things.png')}
                alt="Library of Things"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Library of Things
                </Typography>
                <div
                  sx={{
                    display: "flex", alignItems: "baseline"
                  }}
                >
                  <Box
                    sx={{
                      paddingTop: "10px",
                    }}
                  >
                    <Typography
                      // variant="body2"
                      variant="h6" 
                      color="text.secondary"
                    >
                      Full-stack social app with secure log-in where users can store pictures, view other users' pictures, and communicate over chat.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "15px",
                    }}
                  >

                    <Typography
                      variant="body2"
                      // variant="h6" 
                      color="text.secondary"
                    >
                      Built with Supabase for postgres Database, authentication/authorization, and real-time chat capabilities, Material UI component library, Next.js, React, Vercel, and Cypress.
                    </Typography>
                  </Box>

                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item
          margin="auto"
        >

          <Card sx={{
            maxWidth: "400px",
            height: "600px",
            paddingTop: "10px",
            borderRadius: 4
          }}>
            <CardActionArea
              href={'https://youtu.be/W52HQTDmO80'}
              target='_blank'
              sx={{
                height: '100%',
                backgroundColor: '#000',
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={require('./assets/Alexa.png')}
                alt="Amazon Alexa"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Tech Prep
                </Typography>

                <Box
                  sx={{
                    paddingTop: "10px"
                  }}>
                  <Typography 
                  variant="h6" 
                  color="text.secondary">
                    A tech-jobs Amazon Alexa skill that emails users current job listings, and quizzes users with interview questions and coding problems.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    paddingTop: "15px"
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Built with AWS S3, Lambda, SNS, and Alexa Developer Console.
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item
          margin="auto"
        >

          <Card
            sx={{
              maxWidth: "400px",
              height: "600px",
              paddingTop: "10px",
              borderRadius: 4
            }}
          >
            <CardActionArea
              href={'https://travelbytes.netlify.app'}
              target='_blank'
              sx={{
                height: '100%',
                backgroundColor: '#000',
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={require('./assets/TravelBytes.png')}
                alt="TravelBytes"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  TravelBytes
                </Typography>
                <Box
                  sx={{
                    paddingTop: "10px"
                  }}
                >

                  <Typography
                    variant="h6"
                    color="text.secondary"
                  >
                    A travel app that accesses multiple APIs, displays filtered data to the user, and allows a user to add and edit notes.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    paddingTop: "15px"
                  }}
                >
                  <Typography
                    variant="body2" 
                    color="text.secondary">
                    Built with HTML, CSS, JavaScript, React, Bootstrap, MongoDB, Mongoose, and Axios.
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container >
  );
}