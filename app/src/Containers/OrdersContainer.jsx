import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TablePaginationActionsWrapped from '../components/pagination.jsx'
import Slide from "@material-ui/core/Slide";

const styles = theme => ({
    root: {
        margin: theme.spacing.unit * 5,
    },
    table: {
        textAlign: 'left',
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
});

class Orders extends React.Component {
    constructor(props) {
        super(props);
                

        this.state = {
            data: [],
            page: 0,
            rowsPerPage: 5,
            open: false
        };
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    redirectToOrder = (id) => {
        console.log('ID',id)
        this.props.history.push(`/order/${id}`)
    }

    
    render() {
        const { classes, orders } = this.props;
        const { data, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <div>
                <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Número de pedido</TableCell>
                                    <TableCell>Fecha de creación</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Cantidad de productos</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                    return (
                                        <TableRow key={n.id} hover onClick={()=> this.redirectToOrder(n.id)}>
                                            <TableCell component="th" scope="row">
                                                {n.id}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {n.createdAt.split('T')[0]}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {n.status}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {n.product.length}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {'$ ' + n.total}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 48 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        colSpan={3}
                                        count={data.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActionsWrapped}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </Paper>
            </div>

        );
    }
}

Orders.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Orders);
