import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/icons";
import ShoppingCart from '@material-ui/icons/ShoppingCart'

const styles = theme => ({
    root:{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row',
        flex: 1, 
        minHeight: '100%', 
    },
    itemsList:{
        flex: 0.7,
        paddingRight: '1rem',
    },
    buyBox:{
        borderRadius: '5px 5px 0 0',
        flex: 0.3,
    },
    buyBoxBody:{
        display: 'grid',
        background: 'white',
    },
    buyBoxHeader:{
        minHeight: '3rem',
        color: 'white' ,
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
    punch:{
        display: 'inline-block',
        padding: '1rem',
        margin: 'auto',
        fontSize: 'small',
        fontWeight: 100,
    },
    icon:{
        color: '98d1fe',
        position: 'relative',
        top: '0.5rem',
    },
    total:{
        margin: '3rem 3rem 2rem 3rem',
        borderTop: '1px solid #DDD',
        borderBottom: '1px solid #DDD',
        color: '#727272' ,
        flex: 0.8,
    },
    checkout:{
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
    title:{
        paddingRight: '0.9rem',
        flex: 0.5,
        textAlign: 'left',
    },
    price:{
        color: 'grey',
        flex: 0.1,
    },
    cantidad:{
        flex: 0.1,
    }


  
});

function Cart(props) {
  const { classes, items, total, eliminar, cantidad, vaciar } = props;
  return (
    <div className={classes.root}>
        <div className={classes.itemsList}>
               
          {items.map((n, index) => {
            return (
                <div key={n.id} className={classes.product}>
    
                    <div className={classes.imagen}>
                        <img src={n.img} alt={n.title} className={classes.ImgProd}/>
                    </div>

                    <div className={classes.title}>
                        <h4>{n.title}</h4>
                        <Button onClick={() => eliminar(index)} className={classes.button}>
                        eliminar
                        </Button>
                    </div>
            
                    <div className={classes.price}>
                        <h4>${n.price}</h4>
                    </div>
                
                    <div className={classes.cantidad}>
                            <TextField
                            label="Cantidad"
                            type="number"
                            onChange={(e) => cantidad(e, index)}
                            defaultValue={n.cantidad}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            />
                    </div>

                </div>
            );
            })}
        </div>
        <div className={classes.buyBox}>

            <div className={classes.buyBoxHeader}>
                <ShoppingCart className={classes.icon}/><p className={classes.punch}>{' Completa tu orden con un click'}</p>
            </div>
            <div className={classes.buyBoxBody}>
                <div className={classes.total}>
                    <h3>{'Total: $ ' + total}</h3>
                </div>
                <div className={classes.checkout}>
                    <Button className={classes.buyBoxButton2} onClick={vaciar}>
                            Vaciar
                    </Button>
                    <Button className={classes.buyBoxButton1}>
                            checkout
                    </Button>
                </div>
            </div>

        </div>
    </div>
  );
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);