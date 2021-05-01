import React, { useState, useEffect } from 'react';
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
import useAuth from 'src/hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {},
  current: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  }
}));


const UsuariosArbol = ({ className, ...rest }) => {

  const classes = useStyles();
  const [usuariosList, setUsuarios] = useState([]);
  const { user } = useAuth();

  const consultarAPI = () => {
    fetch(`${process.env.REACT_APP_URL}/index.php?action=getUsuariosPago&id=${user.arbol}`)
    .then(response => response.json())
    .then(data => setUsuarios( data ));
  }
  
  useEffect( () => {
    consultarAPI();
  }); 

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
          {usuariosList.length}
          </Typography>
        )}
        classes={{ action: classes.current }}
        subheader="Usuarios con el pago realizado en este arbol"
        subheaderTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
        title="Usuarios"
        titleTypographyProps={{ color: 'textPrimary' }}
      />
      <List>
        {usuariosList.map((usuario, index) => (
          <ListItem
            divider
            key={index}
          >
            <ListItemText
              primary={index+1 + '. ' + usuario.name}
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
