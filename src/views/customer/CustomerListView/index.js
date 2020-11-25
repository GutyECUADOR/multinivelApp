import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customers, setCustomers] = useState([]);

  const getCustomers = useCallback(async () => {
    try {
      fetch(`${process.env.REACT_APP_URL}/index.php?action=getUsuarios`)
      .then(response => response.json())
      .then(data => {
        if (isMountedRef.current) {
          setCustomers(data);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <Page
      className={classes.root}
      title="Lista de Clientes/Usuarios"
    >
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
