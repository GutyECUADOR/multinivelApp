import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@material-ui/core';
import Arbol from './Arbol';

const MatrizArbol = () => {
  
  return (
    <Card>
      <CardHeader
       
        title="Arbol Principal"
      />
      <Divider />
      <CardContent>
        <PerfectScrollbar>
            <Arbol/>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

MatrizArbol.propTypes = {
  className: PropTypes.string
};

export default MatrizArbol;
