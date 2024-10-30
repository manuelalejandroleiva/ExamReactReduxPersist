import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    container: {
      height:'100vh',
      maxWidth: '100vw',
      overflowY: 'auto', // Enable vertical scrolling
      overflowX: 'hidden',
      [theme.breakpoints.down('md')]: {
            
        
        maxHeight: 'calc(100vh - 150px)', // Set maxHeight with calc
        
      },
    },
    box_first:{
      display: 'flex',
      width:'100vw',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '0 auto',
      justifyItems: 'center',
      border: 1,
      paddingTop:4
    },

    box_button:{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      margin: '0 auto',
      justifyItems: 'flex-start',
      border: 1
    }
    
  }),
  { index: 1 },
);

