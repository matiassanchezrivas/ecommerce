import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from '../config/axios.js'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import BackofficeProduct from '../components/BackofficeProduct'
import { fetchProducts } from '../action-creators/products'
import { fetchCategories } from '../action-creators/category'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 5
    },
    paper: {
        paddingLeft: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 5,
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    boton: {
        margin: theme.spacing.unit * 2,
    }
});

class Products extends Component {
    constructor() {
        super()
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    render() {
        console.log(this.props.users)
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.root} spacing={16} direction="column" align="center">
                    <Grid item xs={8}>
                        {
                            this.props.products.map((product) => {
                                return <BackofficeProduct key={product.id} product={product} categories={this.props.categories} />
                            })
                        }
                    </Grid>
                </Grid>
            </div >
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchCategories: () => dispatch(fetchCategories())
    };
}

const mapStateToProps = function (state) {
    return {
        products: state.products.products,
        categories: state.categories.categories
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products))