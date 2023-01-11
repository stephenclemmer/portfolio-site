import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowRightOutlined from '@mui/icons-material/KeyboardArrowRightOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';

export default function Welcome() {

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

    if (name === '') {
      setNameError(true)
    }

    if (email === '') {
      setEmailError(true)
    }

    if (message === '') {
      setMessageError(true)
    }

    if (name && email && message) {
      console.log('Form has been \'submitted\'')
    }
  }

  return (

    <Container
      id="contact"
      sx={{
        paddingTop: "80px",
        margin: "auto"
      }}
    >
      <Typography
        variant='h3'
        color='secondary'
        align='center'
        gutterBottom
      >
        Contact
      </Typography>
      <FormControl
        margin="normal"
      >

        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          // margin="auto"
        >
          <Grid>
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '35ch' },
      }}
    >
            <TextField
              onChange={(e) => setName(e.target.value)}
              size="small"
              // margin="dense"
              label="Name"
              variant="outlined"
              color="secondary"
              required
              error={nameError}
              margin="auto"
              />
            </Box>
          </Grid>

          <Grid>
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '35ch' },
        paddingTop: "10px"
      }}
    >
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              label="Email"
              variant="outlined"
              color="secondary"
              required
              error={emailError}
            />
            </Box>
          </Grid>

          <Grid>
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '35ch' },
        paddingTop: "10px"
      }}
    >
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              label="Message"
              variant="outlined"
              color="secondary"
              required
              multiline
              rows='4'
              error={messageError}
            />
            </Box>
          </Grid>
          <Box
          sx={{
            paddingTop: "10px"
          }}
          >

          <Button
            variant="contained"
            color="primary"
            type="submit"
            >Submit
            <KeyboardArrowRightOutlined />
          </Button>
            </Box>

        </form>
      </FormControl>

<Box
sx={{
  paddingTop: "10px"
}}
>

      <Typography onClick={() => window.location = 'mailto:stephenjclemmer@gmail.com'}>
        or email me at StephenJClemmer@gmail.com
      </Typography>
</Box>

    </Container>

  );
}