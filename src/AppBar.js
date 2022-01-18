import * as React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
  // box: {
  //   flexGrow: 1,
  // },
  appBar: {
    backgroundColor: '#fff',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" color="primary">
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
