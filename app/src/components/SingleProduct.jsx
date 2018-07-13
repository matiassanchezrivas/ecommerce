import React from 'react';
import PropTypes from 'prop-types';
import { addProductCart } from '../action-creators/cart'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import '../css/MenuProduct.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux';
axios.defaults.baseURL = 'http://localhost:3002'

const db = [
    { id: 1, img: 'https://images.evo.com/imgp/700/122201/538568/dc-focus-snowboard-2018-145.jpg', title: 'DC Focus Snowboard 2017', price: 150, cantidad: 2, categoria: 'categoria 1' },

]




const styles = theme => ({
    root: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        minHeight: '100%',
    },
    itemsList: {
        flex: 0.7,
        paddingRight: '1rem',
    },
    buyBox: {
        borderRadius: '5px 5px 0 0',
        flex: 0.3,
    },
    buyBoxBody: {
        display: 'grid',
        background: 'white',
    },
    buyBoxHeader: {
        minHeight: '3rem',
        color: 'white',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    buyBoxButton1: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        fontSize: '0.81rem',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 15,
        margin: '0.5rem',
        marginBottom: '3rem',
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    buyBoxButton2: {
        fontSize: '0.81rem',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 15,
        margin: '0.5rem',
        marginBottom: '3rem',
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    punch: {
        display: 'inline-block',
        padding: '1rem',
        margin: 'auto',
        fontSize: 'small',
        fontWeight: 100,
    },
    icon: {
        color: '98d1fe',
        position: 'relative',
        top: '0.5rem',
    },
    total: {
        margin: '3rem 3rem 2rem 3rem',
        borderTop: '1px solid #DDD',
        borderBottom: '1px solid #DDD',
        color: '#727272',
        flex: 0.8,
    },
    checkout: {
        flex: 0.2,
    },

    button: {
        fontSize: '0.81rem',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 15,
        margin: '0.5rem',
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '3rem',
    },
    product: {
        background: 'white',
        borderBottom: '1px solid #DDD',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    imagen: {
        height: '9rem',
        width: '10rem',
        flex: 0.3,
    },
    ImgProd: {
        maxHeight: '8rem',
    },
    title: {
        paddingRight: '0.9rem',
        flex: 0.5,
        textAlign: 'left',
    },
    price: {
        color: 'grey',
        flex: 0.1,
    },
    cantidad: {
        flex: 0.1,
    }



});




class SingleProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            currentProduct: []
        }

    }



    render() {
        const { classes, items, total, eliminar, cantidad, vaciar, userC } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.itemsList}>
                    <div>
                        <div key={this.state.currentProduct.id} className={classes.product}>

                            <div className={classes.imagen}>
                                <img src={this.state.currentProduct.images} alt={this.state.currentProduct.title} className={classes.ImgProd} />
                            </div>

                            <div className={classes.title}>
                                <h2>{this.state.currentProduct.name}</h2>
                                <h4>{this.state.currentProduct.description}</h4>
                                <Button onClick={() => this.props.addProductCart(this.state.currentProduct)} className={classes.button}>
                                    Comprar
                        </Button>
                            </div>

                            <div className={classes.price}>
                                <h4>${this.state.currentProduct.price}</h4>
                            </div>

                            <div className={classes.cantidad}>

                            </div>

                        </div>
                    </div>


                </div>
                <div className={classes.buyBox}>

                    <div className={classes.buyBoxHeader}>
                        <p className={classes.punch}>{'Review'}</p>
                    </div>
                    <div className={classes.buyBoxBody}>
                        <div className={classes.total}>
                            <h3>{userC}</h3>
                            <h3>{}</h3>
                        </div>
                        <div className={classes.checkout}>

                        </div>
                    </div>

                </div>
            </div>
        );

    };
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProp = dispatch => {
    return {
        addProductCart(product) {
            dispatch(addProductCart(product))
        }
    };
};

SingleProduct.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProp)(withStyles(styles)(SingleProduct));
