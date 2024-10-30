import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    container: {
      height: '100vh',
      maxWidth: '100vw',
      overflowY: 'auto', // Enable vertical scrolling
      overflowX: 'hidden' // Optionally hide horizontal scrolling
    },
    box_first:{
      display: 'flex',
      width:'100vw',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '0 auto',
      justifyItems: 'center',
      border: 1,
      paddingTop:25,
      [theme.breakpoints.down('md')]: {
        paddingTop: 50,
        width:'100vw',
        display: 'flex',
      },
    },

    box_button:{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      margin: '0 auto',
      justifyItems: 'flex-start',
      border: 1
    },

    estado:{
        display:'flex',
        
        [theme.breakpoints.down('md')]: {
            
            width:'80vw',
            paddingLeft:10
            
          },


    },
    formdata: {
        [theme.breakpoints.up('md')]: {
          paddingTop: 15,
          display: 'flex',
        },
      },
    
  }),
  { index: 1 },
);

