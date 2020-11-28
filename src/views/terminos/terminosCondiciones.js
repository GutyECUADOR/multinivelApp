import React from 'react';
import {
  Box,
  Container,
  Card,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    height: '100%',
    paddingTop: 80,
    paddingBottom: 120,
    textAlign: 'justify'
  }
}));

const PricingView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Pricing"
    >
      <Container maxWidth="sm">
      
        <Typography
            align="center"
            variant="h1"
            color="textPrimary"
          >
            Términos & Condiciones
          </Typography>
          <Box mt={4}>
          <Card>
            <Typography
              align="center"
              variant="subtitle1"
              color="textSecondary"
            >
              Ingrese aqui su texto de terminos y condiciones
            </Typography>
            </Card>
          </Box>
     
        
      </Container>
    </Page>
  );
};

export default PricingView;
