import React, { Fragment, useState, useEffect } from "react";
import useAuth from 'src/hooks/useAuth';
import NotArbolFound from './NotArbolFound';
import StatusFinalizado from './StatusFinalizado';
import StatusFinalizadoPagado from './StatusFinalizadoPagado';
import {
  Grid,
  Box,
  Avatar,
  Card,
  CardContent,
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
  }); 

  return(
    <Fragment>
          { user.tier === 'Pagado' && user.state === '' &&
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
                              { usuarios[0]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                 
                </Grid>

                <Grid container justify="center" spacing={5}>
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
                              { usuarios[1]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[2]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                </Grid>

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
                              { usuarios[3]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[4]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[5]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[6]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={1}>
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
                              { usuarios[7]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[8]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[9]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[10]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[11]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[12]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[13]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
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
                              { usuarios[14]?.name }
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Box>
          }

      { user.tier !== 'Pagado' &&
        <NotArbolFound/>
      }

      { user.tier === 'Pagado' && user.state === 'finalizado' &&
        <StatusFinalizado/>
      }

      { user.tier === 'Pagado' && user.state === 'finalizado & pagado' &&
        <StatusFinalizadoPagado/>
      }
          
    </Fragment>)
    
}

export default Arbol;