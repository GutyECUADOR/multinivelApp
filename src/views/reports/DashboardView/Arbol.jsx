import React, { Fragment, useState, useEffect } from "react";
import useAuth from 'src/hooks/useAuth';
import NotArbolFound from './NotArbolFound';
import {
  Grid,
  Paper,
  Box,
  Avatar,
  Card,
  CardContent,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  name : {
    fontSize: 13
  },
  avatar: {
    height: 40,
    width: 40,
  },
  paper: {
    height: 100,
    width: 80,
    marginTop: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#f4f6f8'
  },
}));


const Arbol = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const [usuarios, setUsuarios] = useState([]);

  const consultarAPI = () => {
    fetch(`${process.env.REACT_APP_URL}/index.php?action=getArbol&id=${user.arbol}`)
    .then(response => response.json())
    .then(data => setUsuarios( data ));
  }
  
  useEffect( () => {
    consultarAPI();
  },[]); 

  return(
    <Fragment>
          { usuarios.length > 0 &&
          <Box height={500} minWidth={725}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  
                    <Grid item>
                      <Card className={classes.paper}>
                        <CardContent>
                          <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                            textAlign="center"
                          >
                            <Avatar
                              className={classes.avatar}
                              src={user.avatar}
                            />
                            <Typography
                              className={classes.name}
                              color="textPrimary"
                              gutterBottom
                            >
                              José Gutiérrez
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                 
                </Grid>

                <Grid container justify="center" spacing={5}>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={2}>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={1}>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid item>
                      <Paper className={classes.paper} />
                    </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Box>
          }

      { usuarios.length === 0 &&
        <NotArbolFound/>
      }
          
    </Fragment>)
    
}

export default Arbol;