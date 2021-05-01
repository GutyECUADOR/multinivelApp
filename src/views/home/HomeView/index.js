import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {},
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    background: 'green'
  }
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Bienvenido"
    >
      <Hero />
    <Fab 
      className={classes.fab} 
      size="large"
      color="primary" 
      href="https://api.whatsapp.com/send?phone=+57 302 3484366&text=Hola%21%20necesito%20m%C3%A1s%20informaci%C3%B3n%20."  target="_blank"
      aria-label="Centro de Información">
      <WhatsAppIcon />
    </Fab>
    </Page>
  );
};

export default HomeView;
