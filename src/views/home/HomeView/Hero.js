import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 100,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  image: {
    textAlign: 'center',
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  parrafo: {
    
  },
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={5}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
             
              <Typography
                variant="h1"
                color="textPrimary"
              >
                Misión
              </Typography>
              
              <Typography
                variant="body1"
                color="textSecondary"
              >
                El trabajo en equipo es de los mejores comienzos para un gran emprendimiento. Ya que en equipo construiremos el éxito. El cual generara riquezas para todos.
              </Typography>
             
              <Typography
                variant="h1"
                color="textPrimary"
                style={ {marginTop: 20}}
              >
                Visión
              </Typography>
              
              <Typography
                variant="body1"
                color="textSecondary"
              >
                Si buscas resultados distintos, de esta manera encontraras la clave. El éxito consiste en confiar en ti, y nada será imposible. Te ayudaremos a comprender el proceso para alcanzar la cima.
              </Typography>

              <Typography
                variant="h1"
                color="textPrimary"
                style={ {marginTop: 20}}
              >
                Objetivo
              </Typography>
              
              <Typography
                variant="body1"
                color="textSecondary"
              >
                Siguiendo la estructura, podremos obtener muy buenas recompensas, que se podrán multiplicar para todos.
              </Typography>


            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
          >
            <Box position="relative">
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src="/static/home/crowdfounding.png"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
