import React from 'react';
import PropTypes from 'prop-types';
import { addProductCart } from '../action-creators/cart'
import axios from 'axios';
import { connect } from 'react-redux';
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
axios.defaults.baseURL = 'http://localhost:3002'


const db =[
  {id:1, img:'https://images.evo.com/imgp/700/122201/538568/dc-focus-snowboard-2018-145.jpg', title:'DC Focus Snowboard 2017', price:150, cantidad:2,categoria: 'categoria 1'},
  {id:2, img:'https://cdn.luxedb.com/wp-content/uploads/2011/11/Star-Wars-Inspired-Products-from-Burton-Snowboards-4.jpg', title:'DC Focus Snowboard 2017, DC Focus Snowboard 2017', price:200, cantidad:1,categoria:'categoria 2'},
  {id:3, img:'https://i.pinimg.com/originals/d4/ef/78/d4ef78ebe0e01369d9e162afcf88b16f.jpg', title:'DC Focus Snowboard 2017', price:100, cantidad:5,categoria:'categoria 3'},
  {id:4, img:'http://img0.biker-boarder.de/detail_oxp1/atomic17_an5105326_savor_otg_photo_black_photochromic.jpg', title:'DC Focus Snowboard 2017', price:113, cantidad:1,categoria:'categoria 4'},
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
  constructor() {
    super()
    this.state = {
      filter: null,
      CategoryFilter: null,
      product: []
    };
    
    this.categoryFilterList=this.categoryFilterList.bind(this)   
    axios.get('/product')
      .then(response => {
        console.log('data de la respuesta', response.data)
      }
      )


      .catch(error => {
        console.log('el error: ', error)
      })
  }

  categoryFilterList(ev) {
    const categoria = ev
    this.setState({
      CategoryFilter: categoria
    })
    console.log('categoria seleccionada:', this.state.CategoryFilter)
  }



  filterList(ev) {
    const filter = ev.target.value
    this.setState({
      filter: filter
    })
    console.log('filtro seleccionado:', this.state.filter)
  }


  render() {
    let rows = []
    let cat = []
    const { classes } = this.props

    if (db != null) {
      console.log("esta tomando la base de datos")
      if(this.state.filter !==null){
      console.log("aplicando filtro")
      db.forEach((product)=>{
      cat.push(<p><button key={product.id} onClick={(e) => this.categoryFilterList(product.categoria)}>{product.categoria}</button></p>)
        const filter = this.state.filter
        if(product.title.toLocaleLowerCase().indexOf(filter.toLowerCase()) > -1){rows.push(<Grid item xs={4} key={product.id}>
        <Paper className={classes.paper}>
        <div className={classes.imagen}>
                        <img src={product.img} className={classes.ImgProd}/>
                    </div>

                    <div className={classes.title}>
                        <h4>{product.title}</h4>
                        <Button className={classes.button} onClick={()=>this.props.addProductCart(product)}>
                        comprar
                        </Button>
                  <Button className={classes.button}>
                    detalle
                        </Button>
                    </div>
            
                    <div className={classes.price}>
                        <h4>${product.price}</h4>
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
    cat.push(<p><button key={product.id} onClick={(e) => this.categoryFilterList(product.categoria)}>{product.categoria}</button></p>)
    const categoria=this.state.CategoryFilter
    if(categoria ==null || product.categoria.indexOf(categoria) > -1){
    rows.push(<Grid item xs={4} key={product.id}>
                <Paper className={classes.paper}>
                <div className={classes.imagen}>
                        <img src={product.img} className={classes.ImgProd}/>
                    </div>

                    <div className={classes.title}>
                        <h4>{product.title}</h4>
                        <Button className={classes.button} onClick={()=>this.props.addProductCart(product)}>
                        comprar
                        </Button>
                  <Button className={classes.button}>
                    detalle
                        </Button>
                    </div>
            
                    <div className={classes.price}>
                        <h4>${product.price}</h4>
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

    return (
      <div className={classes.Appbar} className="container">
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
            <div className="dropdown"><span>Categorias</span><div className="dropdown-content">{cat}</div></div>
            <input type="text" placeholder="Search" onChange={this.filterList.bind(this)} />            
            </Paper>            
          </Grid>
        </Grid>
        <Grid container spacing={24}>{rows}</Grid>
      </div>
    )
  };
}

const mapStateToProps = state =>{
  return {
      
  };
};

const mapDispatchToProp = dispatch=>{
  return {
      addProductCart(product){
      dispatch(addProductCart(product))
    }
  };
};  




MenuProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect (mapStateToProps,mapDispatchToProp)(withStyles(styles)(MenuProduct));