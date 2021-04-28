import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
  Tooltip,
  Button,
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
    maxHeight: 400
  },
  center: {
    textAlign: 'center'
  }
}));

const StatusFinalizado = ({ className, ...rest }) => {
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
          className={classes.center}
        >
          <img
            alt="Cover"
            className={classes.image}
            src="/static/images/status-finalizado.png"
          />
        </Grid>

        <Grid
         container
         direction="row"
         justify="center"
         alignItems="center"
        >
          <Grid
            className={classes.center}
          >
            <Typography
              variant="h3"
              color="textPrimary"
              className={classes.center}
            >
              Felicidades,
              {' '}
              {user.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
            >
              Haz completado tu matriz, pronto te contactaremos para realizar tu pago.
            </Typography>

            
          </Grid>
          
        </Grid>
       
      </Grid>
    </div>
  );
};

export default StatusFinalizado;
