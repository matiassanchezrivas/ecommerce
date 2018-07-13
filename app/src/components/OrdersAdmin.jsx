import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});



function OrdersArdmin(props) {
  const { classes, orders} = props;
  console.log(orders);
  

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Nombre</CustomTableCell>
            <CustomTableCell numeric>N. de orden</CustomTableCell>
            <CustomTableCell >Status</CustomTableCell>
            <CustomTableCell numeric>Fecha</CustomTableCell>
            <CustomTableCell numeric>Cant. Prod.</CustomTableCell>

            <CustomTableCell numeric>Total</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.owner.name}
                </CustomTableCell>
                <CustomTableCell numeric>{n.id}</CustomTableCell>
                <CustomTableCell >{n.status}</CustomTableCell>
                <CustomTableCell numeric>{n.date.split('T')[0]}</CustomTableCell>
                <CustomTableCell numeric>{n.product.length}</CustomTableCell>
                <CustomTableCell numeric>{n.total}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

OrdersArdmin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrdersArdmin);