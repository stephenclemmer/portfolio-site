import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowRightOutlined from '@mui/icons-material/KeyboardArrowRightOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { React, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

// import { makeStyles } from 'tss-react/mui';

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: 'block'
//   }
// })

export default function Welcome() {
  //   const classes = useStyles()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    setNameError(false)
    setEmailError(false)
    setMessageError(false)

    if (name === ''){
      setNameError(true)
    }

    if (email === ''){
      setEmailError(true)
    }

    if (message === ''){
      setMessageError(true)
    }

    if (name && email && message) {
      console.log('Form has been \'submitted\'')
    }
  }

  return (

    <Container>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid>
          <TextField
            // className={classes.field} 
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="outlined"
            color="secondary"
            required
            error={nameError}
          />
        </Grid>
        <Grid>
          <TextField
            // className={classes.field} 
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            color="secondary"
            required
            error={emailError}
          />
        </Grid>
        <Grid>
          <TextField
            // className={classes.field}
            onChange={(e) => setMessage(e.target.value)}
            label="Message"
            variant="outlined"
            color="secondary"
            required
            multiline
            rows='4'
            error={messageError}
          />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >Submit
          <KeyboardArrowRightOutlined />
        </Button>

      </form>

      <Typography>
        or email me at StephenJClemmer@gmail.com
      </Typography>

    </Container>

  );
}