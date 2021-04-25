import React from 'react';
import {
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  logo: {
    maxWidth: "125px"
  },
}));

const Logo = (props) => {

  const classes = useStyles();
  return (
    <img
      className={classes.logo}
      alt="Logo"
      src="/static/home/logo.png"
      {...props}
    />
  );
}

export default Logo;
