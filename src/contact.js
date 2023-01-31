import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowRightOutlined from '@mui/icons-material/KeyboardArrowRightOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { FormControl, makeStyles } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

// ___________________________
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { ImportantDevices } from '@mui/icons-material';
// ___________________________

// to install EmailJS dependencies, in terminal, type the following:
// npm install emailjs-com --save



function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [open, setOpen] = useState(false);

  const form = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

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
      emailjs.sendForm('portfolioSite', 'Portfolio_Contact_Form', form.current, 'zOUvnfhHVplUtepc8')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      // form.current.reset();
      setName('');
      setEmail('');
      setMessage('');

      // const [email, setEmail] = useState('');
      // const [message, setMessage] = useState('');
      setOpen(true);
      // form.current.reset();
      // document.getElementById("myForm").reset();
    }
  };

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
          ref={form}
          onSubmit={sendEmail}
          // id="myForm"
        // margin="auto"
        >
          <Grid>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { width: '35ch' },
                background: '484d5c'
              }}
            >
              <TextField
              sx={{
                backgroundColor: '#000',
                borderRadius: 1.0,
              }}
                onChange={(e) => setName(e.target.value)}
                size="small"
                // margin="dense"
                label="Name"
                name="Name"
                variant="outlined"
                color="secondary"
                required
                error={nameError}
                margin="auto"
                value={name}
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
              sx={{
                backgroundColor: '#000',
                borderRadius: 1.0,
              }}
                // inputProps={{ style: { color: "red" } }}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                label="Email"
                name="Email"
                variant="outlined"
                color="secondary"
                required
                error={emailError}
                value={email}
              />
            </Box>
          </Grid>

          <Grid>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { width: '35ch' },
                paddingTop: "10px",
              }}
            >
              <TextField
              sx={{
                backgroundColor: '#000',
                borderRadius: 1,
              }}
                onChange={(e) => setMessage(e.target.value)}
                label="Message"
                name="Message"
                variant="outlined"
                color="secondary"
                required
                multiline
                rows='4'
                error={messageError}
                value={message}
              />
            </Box>
          </Grid>
          <Box
            sx={{
              paddingTop: "10px"
            }}
          >

            <Button
            sx={{
              backgroundColor: 'green',
              borderRadius: 4
            }}
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

{/* _______________________Confirmation Dialog___________________ */}
<div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle >
           Your message has been sent to stephenjclemmer@gmail.com
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
{/* __________________________________________ */}

    </Container>

  );
}

export default Contact;