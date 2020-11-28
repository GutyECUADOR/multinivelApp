import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import CustomerEditForm from './CustomerEditForm';
import Header from './Header';
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const CustomerEditView = () => {
  const {customerId} = useParams();
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customer, setCustomer] = useState(null);

  const getCustomer = useCallback(async () => {
    try {
      fetch(`${process.env.REACT_APP_URL}/index.php?action=getUsuarioByID&id=${customerId}`)
      .then(response => response.json())
      .then(data => {
        if (isMountedRef.current) {
          setCustomer(data);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  if (!customer) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Edicion de Cliente/Usuario"
    >
      <Container maxWidth={false}>
        <Header />
      </Container>
      <Box mt={3}>
        <Container maxWidth="lg">
          <CustomerEditForm customer={customer} />
        </Container>
      </Box>
    </Page>
  );
};

export default CustomerEditView;
