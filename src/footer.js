import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <>
      <Container 
        sx={{
          marginTop: '64px',
          background: '#484d5c'
        }}
      >
          <Paper sx={{ 
            color: '#c0ccd4',
            bottom: 0, 
            left: 0, 
            right: 0,
            bgcolor: '#484d5c' 
            }} elevation={0}> &copy; 2023</Paper>
       
      </Container>
    </>
  );
}