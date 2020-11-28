import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import MatrizArbol from './MatrizArbol'
import UsuariosArbol from './UsuariosArbol';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Header />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={2}
            xs={12}
          >
            <UsuariosArbol />
          </Grid>
          <Grid
            item
            lg={10}
            xs={12}
          >
            <MatrizArbol />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardView;
