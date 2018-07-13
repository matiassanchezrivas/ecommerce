import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    itemsList: {
        flex: 0.7,
        paddingRight: '1rem',
    },
    buyBox: {
        background: 'white',
        flex: 0.3,
    },
    total: {
        color: 'grey',
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
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        margin: theme.spacing.unit,
        textDecorationLine: 'none'
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
    },
    Appbar: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    // card: {
    //   maxWidth: 345,
    // },
    // media: {
    //   height: 0,
    //   paddingTop: '56.25%', // 16:9

});

class product extends React.Component {
    constructor() {
        super()
    }


    render() {
        const { classes, product } = this.props;
        // product.cantidad = 1;
        return (
            <div className={classes.root}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Grid container spacing={24} direction="column" align="center" >
                            <Grid item xs>
                                <img className={classes.imagen} src={product.images[0]} />
                            </Grid>
                            <Grid item xs>
                                <h4>{product.name}</h4>
                                <Button className={classes.button} onClick={() => this.props.addProductCart(product)}>
                                    comprar
                                </Button>
                                <Link to={`/product/${product.id}`}>
                                    <Button className={classes.button}>
                                        detalle
                                 </Button>
                                </Link>
                            </Grid>

                            <div className={classes.price}>
                                <h4>${product.price}</h4>
                            </div>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(product);