import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import wait from 'src/utils/wait';

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
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        country: customer.country || '',
        email: customer.email || '',
        name: customer.name || '',
        tier: customer.tier || 0,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        country: Yup.string().max(255),
        email: Yup.string().email('Debe ser un email válido').max(255).required('Email es requerido'),
        name: Yup.string().max(255).required('El nombre es requerido'),
        tier: Yup.string().max(10),
       
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // NOTE: Make API request
          console.log(values);
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Informacion Actualizada', {
            variant: 'success'
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
                    value={values.category}
                    variant="outlined"
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
