import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    backgroundColor: theme.palette.common.white
  },
  image: {
    width: '100%',
    maxHeight: 400
  },
  center: {
    textAlign: 'center'
  }
}));

const NotArbolFound = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          item
          md={12}
        >
          <img
            alt="Cover"
            className={classes.image}
            src="/static/images/undraw_growth_analytics_8btt.svg"
          />
        </Grid>

        <Grid
         container
         direction="row"
         justify="center"
         alignItems="center"
        >
          <Grid
            
          >
            <Typography
              variant="h3"
              color="textPrimary"
              className={classes.center}
            >
              Buen dia,
              {' '}
              {user.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
            >
              Realiza tu pago para poder estar dentro de un arbol
            </Typography>
          </Grid>
          
        </Grid>
       
      </Grid>
    </div>
  );
};

NotArbolFound.propTypes = {
  className: PropTypes.string
};

export default NotArbolFound;
