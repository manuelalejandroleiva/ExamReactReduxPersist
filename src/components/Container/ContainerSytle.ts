import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    container: {
      height: '100vh',
      overflow: 'hidden',
    },
    left: {
      zIndex: 2,
      flexBasis: theme.spacing(34),
      maxWidth: theme.spacing(34),
      boxShadow: '0px 0px 10px 2px rgba(33, 33, 37, 0.17)',
      minWidth: 272,
    },
    right: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
  { index: 1 },
);

