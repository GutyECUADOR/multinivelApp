import React from 'react';
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
    maxHeight: 400
  },
  center: {
    textAlign: 'center'
  }
}));

const StatusFinalizadoPagado = ({ className, ...rest }) => {
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
            src="/static/images/status-finalizadoPagado.png"
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
             Ya haz recibido tu pago. No te detengas y refiere a más amigos.
            </Typography>

            
          </Grid>
          
        </Grid>
       
      </Grid>
    </div>
  );
};

export default StatusFinalizadoPagado;
