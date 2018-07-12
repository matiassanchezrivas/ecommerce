import React from 'react';
import PropTypes from 'prop-types';
import { addProductCart } from '../action-creators/cart'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './MenuProduct.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
axios.defaults.baseURL='http://localhost:3002'
 
const db =[
    {Nombre:"iphone 5", descripcion:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica',imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfnD5ehNmZO3CeClig1Zacs8hybmYyRevuF6ajW7Utd2ToQh2",categoria: "categoria 1"}
  ]




const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
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
        margin:20
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
        height: '20rem',       
        flex: 0.3,
        margin:40,
        textAlign: 'center',        
    },
    ImgProd: {
        maxHeight: '55rem',
        margin:40,
        
    },
    title:{
        paddingRight: '0.9rem',
        flex: 0.5,
        textAlign: 'center',
    },
    price:{
        color: 'grey',
        flex: 0.1,
    },
    cantidad:{
        flex: 0.1,
    },
    Appbar: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }  
   
  });




class SingleProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            currentProduct:[]
        }

    }
    
    componentDidMount() {
        console.log('entra al did mount del SingleProduct')
        axios.get('/product/1')
          .then(res => res.data)
          .then((product) => {
              console.log('currentProduct', product[0])
            this.setState({
                currentProduct:product[0]
            })
          })
          .catch(
            (err) => {
              console.log('no hay producto con ese id')
            })
      }
  
    render(){
        const {classes}=this.props  
        
        return(    <div>
                    <div className={classes.imagen}>
                    <div>
                    
                    <div className={classes.title}>
                        <h4>{this.state.currentProduct.name}</h4>
                        <Button className={classes.button}onClick={()=>this.props.addProductCart(this.state.currentProduct)}>
                        comprar
                        </Button>
                        <Button className={classes.button} >
                        detalle
                        </Button>
                    </div> 
                    <div className={classes.price}>
                        <h4>${200}</h4>
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
                        
                    </div>

                   
            
                   
    </div>)
    
};    
}

const mapStateToProps = state =>{
    return {
        cart:state.cart
    };
};

const mapDispatchToProp = dispatch=>{
    return {
        addProductCart(product){
        dispatch(addProductCart(product))
      }
    };
  };

SingleProduct.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default connect(mapStateToProps,mapDispatchToProp)(withStyles(styles)(SingleProduct));
