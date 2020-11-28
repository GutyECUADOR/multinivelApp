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

const PerformanceOverTime = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <PerfectScrollbar>
          <Box
            height={700}
            minWidth={500}
          >
            <Arbol />
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

PerformanceOverTime.propTypes = {
  className: PropTypes.string
};

export default PerformanceOverTime;
