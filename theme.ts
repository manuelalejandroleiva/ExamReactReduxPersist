import { createMuiTheme, Theme } from "@mui/material";

  
  // Create a theme instance.
  export const innerTheme = (outerTheme: Theme): Theme =>
    createMuiTheme({
      palette: {
        ...outerTheme.palette,
      },
      typography: {
        allVariants: {
          color: outerTheme.palette.text.primary,
          fontStyle: 'normal',
        },
        fontFamily: 'Roboto',
  
        // H1
        h1: {
          fontWeight: 800,
          lineHeight: '44px',
          fontSize: '32px',
        },
        // H2
        h2: {
          fontSize: 24,
          fontWeight: 'bold',
          lineHeight: '33px',
        },
        // H3
        h3: {
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '25px',
        },
        // text bold
        h4: {
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: 1.5,
        },
        h5: {
          fontWeight: 800,
          lineHeight: '44px',
          fontSize: 1.5,
        },
        // text
        body1: {
          fontSize: '14px',
          lineHeight: 1.5,
        },
        // data
        body2: {
          fontSize: '12px',
          lineHeight: 1,
        },
        // tips
        caption: {
          fontSize: '12px',
          fontWeight: 'bold',
          lineHeight: 1,
        },
      },
     
    });
  
  export const theme = createMuiTheme({
    palette: {
      primary: {
        // blue
        main: '#5D6CF0',
        // light blue
        light: '#F2F6FF',
      },
      secondary: {
        // TODO replace if need, this is only for fix
        main: '#9c27b0',
        // Blue on dark
        dark: '#6F7DFF',
      },
      background: {
        default: '#FFF',
        paper: '#F8FAFE',
      },
      success: {
        // Green
        main: '#19B665',
        // Green light
        light: '#E8F8F0',
      },
      error: {
        // red
        main: '#E3153A',
        // red on dark
        dark: '#F6637F',
      },
      text: {
        // gray 1
        primary: '#333',
        secondary: '#FFF',
        
      },
      grey: {
        // black
        900: '#000',
        // Header bg color
        800: '#292A2F',
        // video
        700: '#36373E',
        // gray 5
        600: '#6C6C77',
        // gray 4
        500: '#A1A1A9',
        // gray 3
        400: '#BDBCC5',
        // gray 2
        300: '#E2E2E8',
        // gray 1
        200: '#EBEBF0',
        // light gray
        100: '#FAFAFC',
      },
    },
    breakpoints: {
      values: {
        xs: 400,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    
  });
  