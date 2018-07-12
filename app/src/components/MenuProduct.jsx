import React from 'react';
import PropTypes from 'prop-types';
import { addToCart } from '../action-creators/products'
import store from '../store'
import { withStyles } from '@material-ui/core/styles';
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
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3002'

 

const db =[
  {Nombre:"iphone 5", descripcion:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica',imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfnD5ehNmZO3CeClig1Zacs8hybmYyRevuF6ajW7Utd2ToQh2",categoria: "categoria 1"},
  {Nombre:"iphone 6", descripcion:"Lizarddfsdfkgjskdfjgjdsfkjglxdfgs are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDbXBs3QydHU5pXy2lExijZGGEPuFQhvRlUQVMswf3rYlmq4G",categoria: "categoria 2"},
  {Nombre:"RACING", descripcion:"RACING CLUB DE AVELLANEDA!!!",imagen:"data:image/png;base64,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",categoria: "categoria 3"},
  {Nombre:"iphone 5s", descripcion:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica',imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfnD5ehNmZO3CeClig1Zacs8hybmYyRevuF6ajW7Utd2ToQh2",categoria: "categoria 4"},
  {Nombre:"iphone 6s", descripcion:"Lizarddfsdfkgjskdfjgjdsfkjglxdfgs are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDbXBs3QydHU5pXy2lExijZGGEPuFQhvRlUQVMswf3rYlmq4G",categoria: "categoria 5"},
  {Nombre:"LACADE", descripcion:"RACING CLUB DE AVELLANEDA!!!",imagen:"data:image/png;base64,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",categoria: "categoria 6"}    
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
  },
  Appbar: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }  
  // card: {
  //   maxWidth: 345,
  // },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  // }
});

class MenuProduct extends React.Component {
  constructor(){
    super()
    this.state={
      filter: null,
      CategoryFilter: null,
      Product:[]
    };
    this.addToCart=this.addToCart.bind(this)
    this.categoryFilterList=this.categoryFilterList.bind(this)   
    axios.get('/product')
   .then(response =>{
     console.log('data de la respuesta', response.data)}
    )
  
 
 .catch(error =>{
   console.log('el error: ',error)
 })  
}

  categoryFilterList(ev){
    const categoria=ev
    this.setState({
      CategoryFilter:categoria
    })
   console.log('categoria seleccionada:' ,this.state.CategoryFilter)
    }
  


  filterList(ev){
    const filter=ev.target.value
    this.setState({
      filter:filter
    })
    console.log('filtro seleccionado:' ,this.state.filter)
  }

  addToCart(product){
      store.dispatch(addToCart(product))
  }

  render (){
    let rows=[]
    let cat=[]
    const {classes}=this.props

    if(db!=null){
      console.log("esta tomando la base de datos")
      if(this.state.filter !==null){
      console.log("aplicando filtro")
      db.forEach((product)=>{
      cat.push(<p><button key={product.categoria} onClick={(e) => this.categoryFilterList(product.categoria)}>{product.categoria}</button></p>)
        const filter = this.state.filter
        if(product.Nombre.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1){rows.push(<Grid item xs={4} key={product.Nombre}>
        <Paper className={classes.paper}>
        <div className={classes.imagen}>
                        <img src={product.imagen} className={classes.ImgProd}/>
                    </div>

                    <div className={classes.title}>
                        <h4>{product.Nombre}</h4>
                        <Button className={classes.button} onClick={()=>this.addToCart(product)}>
                        comprar
                        </Button>
                        <Button className={classes.button}>
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
                    
        </Paper>
       </Grid>)}
      })  
    }else{
    console.log("no se coloco ningun filtro")
    db.forEach((product)=>{      
    cat.push(<p><button key={product.categoria} onClick={(e) => this.categoryFilterList(product.categoria)}>{product.categoria}</button></p>)
    const categoria=this.state.CategoryFilter
    if(categoria ==null || product.categoria.indexOf(categoria) > -1){
    rows.push(<Grid item xs={4} key={product.Nombre}>
                <Paper className={classes.paper}>
                <div className={classes.imagen}>
                        <img src={product.imagen} className={classes.ImgProd}/>
                    </div>

                    <div className={classes.title}>
                        <h4>{product.Nombre}</h4>
                        <Button className={classes.button} onClick={()=>this.addToCart(product)}>
                        comprar
                        </Button>
                        <Button className={classes.button}>
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
                </Paper>
              </Grid>)}})    
        }
  }

    return(
    <div className={classes.Appbar} className ="container">
      <Grid container spacing={24}>
        <Grid item xs>          
          <Paper className={classes.paper}><input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/></Paper>
          <Paper className={classes.paper}>
              <div className="dropdown">
                <span>Categorias</span>
                <div className="dropdown-content">{cat}</div>
            </div>
          </Paper>                    
        </Grid>          
      </Grid>
      <Grid container spacing={24}>{rows}</Grid>     
  </div>
    )
  };
}

MenuProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuProduct);