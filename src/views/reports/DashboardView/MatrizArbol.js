import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core';
import Arbol from './Arbol';

const useStyles = makeStyles(() => ({
  root: {}
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
            <Arbol />
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

PerformanceOverTime.propTypes = {
  className: PropTypes.string
};

export default PerformanceOverTime;
