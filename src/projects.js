import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Projects() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
      
        <Paper elevation={0}> Project 1</Paper>
        <Paper elevation={0}> Project 2</Paper>
        <Paper elevation={0}> Project 3</Paper>
        
      </Box>
    </>
  );
}