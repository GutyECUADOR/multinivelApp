import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  SvgIcon,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Edit as EditIcon,
  Search as SearchIcon
} from 'react-feather';
import getInitials from 'src/utils/getInitials';

const tabs = [
  {
    value: 'all',
    label: 'Todos'
  },
  {
    value: 'hasAcceptedMarketing',
    label: 'Pagado'
  },
  {
    value: 'isProspect',
    label: 'Sin Pagar'
  },
  {
    value: 'isReturning',
    label: 'Completados'
  }
];

const applyFilters = (customers, query, filters) => {
  return customers.filter((customer) => {
    let matches = true;

    if (query) {
      const properties = ['email', 'name'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (customer[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && customer[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (customers, page, limit) => {
  return customers.slice(page * limit, page * limit + limit);
};

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    width: 500
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  }
}));

const Results = ({
  className,
  customers,
  ...rest
}) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('all');
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    hasAcceptedMarketing: null,
    isProspect: null,
    isReturning: null
  });

  const handleTabsChange = (event, value) => {
    const updatedFilters = {
      ...filters,
      hasAcceptedMarketing: null,
      isProspect: null,
      isReturning: null
    };

    if (value !== 'all') {
      updatedFilters[value] = true;
    }

    setFilters(updatedFilters);
    setSelectedCustomers([]);
    setCurrentTab(value);
  };

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllCustomers = (event) => {
    setSelectedCustomers(event.target.checked
      ? customers.map((customer) => customer.id)
      : []);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCustomers = applyFilters(customers, query, filters);
  const paginatedCustomers = applyPagination(filteredCustomers, page, limit);
  const enableBulkOperations = selectedCustomers.length > 0;
  const selectedSomeCustomers = selectedCustomers.length > 0 && selectedCustomers.length < customers.length;
  const selectedAllCustomers = selectedCustomers.length === customers.length;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Tabs
        onChange={handleTabsChange}
        scrollButtons="auto"
        textColor="secondary"
        value={currentTab}
        variant="scrollable"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs>
      <Divider />
      <Box
        p={2}
        minHeight={56}
        display="flex"
        alignItems="center"
      >
        <TextField
          className={classes.queryField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon
                  fontSize="small"
                  color="action"
                >
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            )
          }}
          onChange={handleQueryChange}
          placeholder="Buscar usuario/cliente"
          value={query}
          variant="outlined"
        />
        <Box flexGrow={1} />
      </Box>
      {enableBulkOperations && (
        <div className={classes.bulkOperations}>
          <div className={classes.bulkActions}>
            <Checkbox
              checked={selectedAllCustomers}
              indeterminate={selectedSomeCustomers}
              onChange={handleSelectAllCustomers}
            />
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Borrar
            </Button>
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Editar
            </Button>
          </div>
        </div>
      )}
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Pago
                </TableCell>
                <TableCell align="right">
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCustomers.map((customer) => {
                const isCustomerSelected = selectedCustomers.includes(customer.id);

                return (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={isCustomerSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isCustomerSelected}
                        onChange={(event) => handleSelectOneCustomer(event, customer.id)}
                        value={isCustomerSelected}
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Avatar
                          className={classes.avatar}
                          src={customer.avatar}
                        >
                          {getInitials(customer.name)}
                        </Avatar>
                        <div>
                          <Link
                            color="inherit"
                            component={RouterLink}
                            to="/app/management/customers/1"
                            variant="h6"
                          >
                            {customer.name}
                          </Link>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                          >
                            {customer.email}
                          </Typography>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {`${customer.city}, ${customer.state}, ${customer.country}`}
                    </TableCell>
                    <TableCell>
                      {customer.totalOrders}
                    </TableCell>
                    <TableCell>
                      {numeral(customer.totalAmountSpent).format(`${customer.currency}0,0.00`)}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        component={RouterLink}
                        to="/app/management/customers/1/edit"
                      >
                        <SvgIcon fontSize="small">
                          <EditIcon />
                        </SvgIcon>
                      </IconButton>
                      
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={filteredCustomers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

Results.defaultProps = {
  customers: []
};

export default Results;
