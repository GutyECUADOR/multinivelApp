import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const stateCategories = [
  
  {
    id: '',
    name: ''
  },
  {
    id: 'finalizado',
    name: 'Finalizado'
  },
  {
    id: 'finalizado & pagado',
    name: 'Finalizado & Pagado'
  }
];

const categories = [
  
  {
    id: 'Pagado',
    name: 'Pagado'
  },
  {
    id: 'Sin Pago',
    name: 'Sin Pago'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const CustomerEditForm = ({
  className,
  customer,
  ...rest
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        id: customer.id,
        country: customer.country || '',
        email: customer.email || '',
        referido_id: customer.referido_id || '',
        name: customer.name || '',
        username: customer.username || '',
        password: customer.password || '',
        tier: customer.tier || 0,
        state: customer.state || '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        country: Yup.string().max(255),
        email: Yup.string().email('Debe ser un email válido').max(255).required('Email es requerido'),
        name: Yup.string().max(255).required('El nombre es requerido'),
        username: Yup.string().max(255).required('El nombre de usuario es requerido'),
        password: Yup.string().max(255).required('La contraseña es requerida'),
        tier: Yup.string().max(10),
        state: Yup.string().max(25)
       
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          console.log(values);
          let formData = new FormData();
          formData.append('usuario', JSON.stringify(values));

          fetch(`${process.env.REACT_APP_URL}/index.php?action=updateUsuario`, {
          method: 'POST',
          body: formData
          })
          .then(response => {
              return response.json();
          })
          .then(data => {
           
            console.log(data);
            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
            if (data.commit === true) {
              enqueueSnackbar('Informacion Actualizada ' + data.message, {
                variant: 'success'
              });
              history.push('/app/management/customers')
            }else{
              enqueueSnackbar('Hubo un error al actualizar. ' + data.message, {
                variant: 'error'
              });
            }
           
          }).catch(error => {
              console.error(error);
          });

          
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
          <Card>
            <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Nombre"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.username && errors.username)}
                    fullWidth
                    helperText={touched.username && errors.username}
                    label="Nombre usuario"
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.username}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Contraseña"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.password}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Codigo Referido"
                    name="referido_id"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.referido_id}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.country && errors.country)}
                    fullWidth
                    helperText={touched.country && errors.country}
                    label="Pais"
                    name="country"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Pago"
                    name="tier"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.tier}
                    variant="outlined"
                    disabled={values.tier === 'Pagado'}
                  >
                    {categories.map((category) => (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Estado"
                    name="state"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {stateCategories.map((category) => (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Actualizar información
                </Button>
              </Box>
            </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
};

CustomerEditForm.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerEditForm;
