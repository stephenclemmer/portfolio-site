import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Welcome() {
  return (

    <Container>
      <Paper
        elevation={0}> This should be turned into a contact form
      </Paper>
      <Button 
        onClick={() => console.log('you pushed it')}
        variant="contained"
        color="primary"
        type="submit"
      >
        <MailOutlineIcon />
      </Button>
    </Container>

  );
}