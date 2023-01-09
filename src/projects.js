import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Projects() {
  return (
    <Container
      id="projects"
    >
      <Typography
        variant='h3'
        color='secondary'
        align='center'
        gutterBottom
      >
        Projects
      </Typography>
      <Grid container
        alignItems="center"
        spacing="6">

        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require('./assets/Library-of-things.png')}
                alt="Library of Things"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Library of Things
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full-stack social app with secure log-in where users can store pictures, view other users' pictures, and communicate over chat.

                  <Typography variant="body2" color="text.secondary">
                    Built with Supabase for postgres Database, authentication/authorization, and real-time chat capabilities, Material UI component library, Next.js, React, Vercel, and Cypress.
                  </Typography>

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require('./assets/Alexa.png')}
                alt="Amazon Alexa"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tech Prep
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A tech-jobs Amazon Alexa skill that emails users current job listings, and quizzes users with interview questions and coding problems.

                  <Typography variant="body2" color="text.secondary">
                    Built with AWS S3, Lambda, SNS, and Alexa Developer Console.
                  </Typography>

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require('./assets/TravelBytes.png')}
                alt="TravelBytes"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TravelBytes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A travel app that accesses multiple APIs, displays filtered data to the user, and allows a user to add and edit notes.

                  <Typography variant="body2" color="text.secondary">
                    Built with HTML, CSS, JavaScript, React, Bootstrap, MongoDB, Mongoose, and Axios.
                  </Typography>

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}