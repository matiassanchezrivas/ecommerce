import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import color from '@material-ui/core/colors/teal';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root:{
        background: '#f6f7fb',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row',
        flex: 1, 
    },
    itemsList:{
        flex: 0.7,
        paddingRight: '1rem',
    },
    buyBox:{
        background: 'white',
        flex: 0.3,
    },
    total:{
        color: 'grey' ,
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

let id = 0;
function createData(img, title, price, cantidad) {
  id += 1;
  return { id, img, title, price, cantidad };
}

const data = [
  createData('https://images.evo.com/imgp/700/122201/538568/dc-focus-snowboard-2018-145.jpg', 'DC Focus Snowboard 2017', 150 , 1),
  createData('https://cdn.luxedb.com/wp-content/uploads/2011/11/Star-Wars-Inspired-Products-from-Burton-Snowboards-4.jpg', 'DC Focus Snowboard 2017, DC Focus Snowboard 2017', 200 , 1),
  createData('https://i.pinimg.com/originals/d4/ef/78/d4ef78ebe0e01369d9e162afcf88b16f.jpg', 'DC Focus Snowboard 2017', 100 , 2),
  createData('http://img0.biker-boarder.de/detail_oxp1/atomic17_an5105326_savor_otg_photo_black_photochromic.jpg', 'DC Focus Snowboard 2017', 113 , 1),
];

function Cart(props) {
  const { classes } = props;
    
  return (
    <div className={classes.root}>
        <div className={classes.itemsList}>
               
          {data.map(n => {
            return (
                <div key={n.id} className={classes.product}>
    
                    <div className={classes.imagen}>
                        <img src={n.img} className={classes.ImgProd}/>
                    </div>

                    <div className={classes.title}>
                        <h4>{n.title}</h4>
                        <Button className={classes.button}>
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
            <div className={classes.total}>
                <h3>Total: $540</h3>
            </div>
            <div className={classes.checkout}>
                <Button className={classes.button}>
                        checkout
                </Button>
            </div>
        </div>

    </div>
  );
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);