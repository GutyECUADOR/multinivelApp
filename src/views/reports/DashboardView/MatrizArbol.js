import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  makeStyles
} from '@material-ui/core';
import Arbol from './Arbol';

const useStyles = makeStyles(() => ({
  root: {},
  chart: {
    height: '100%'
  }
}));

const MatrizArbol = ({ className, ...rest }) => {
  const classes = useStyles();
 
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Arbol Principal"
      />
      <Divider />
      <CardContent>
        <PerfectScrollbar>
          <Box
            height={500}
            minWidth={500}
          >
            <Arbol/>
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

MatrizArbol.propTypes = {
  className: PropTypes.string
};

export default MatrizArbol;
