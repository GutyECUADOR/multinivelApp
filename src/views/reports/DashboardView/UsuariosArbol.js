import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {},
  current: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  }
}));


const UsuariosArbol = ({ className, ...rest }) => {
  const classes = useStyles();

  const usuariosList = [
    {
      pathname: 'Guty José'
    },
    {
      pathname: 'Capvan Carlos'
    },
    {
      pathname: 'Ester Cueva'
    },
    {
      pathname: 'Mario Ortega'
    }
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Typography
            color="inherit"
            variant="h3"
          >
           12
          </Typography>
        )}
        classes={{ action: classes.current }}
        subheader="Usuarios con el pago realizado"
        subheaderTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
        title="Usuarios"
        titleTypographyProps={{ color: 'textPrimary' }}
      />
      <List>
        {usuariosList.map((page, index) => (
          <ListItem
            divider
            key={page.pathname}
          >
            <ListItemText
              primary={index+1 + '. ' + page.pathname}
              primaryTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
            />
          </ListItem>
        ))}
      </List>
      <Box
        p={2}
        display="flex"
        justifyContent="flex-end"
      >
      </Box>
    </Card>
  );
};

UsuariosArbol.propTypes = {
  className: PropTypes.string
};

export default UsuariosArbol;
