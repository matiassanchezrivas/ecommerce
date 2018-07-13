import React from 'react';
import PropTypes from 'prop-types';
import { addProductCart } from '../action-creators/cart'
import { fetchProduct, fetchProducts } from '../action-creators/products'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
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
import Product from '../components/product';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { fetchCategories } from '../action-creators/category'


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
  // }
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class MenuProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      filter: '',
      CategoryFilter: null,
      product: []
    };

    this.categoryFilterList = this.categoryFilterList.bind(this)
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
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
    const { classes, products, categories } = this.props
    const { filter, CategoryFilter } = this.state



    return (
      <div className={classes.Appbar} className="container">
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <TextField
                label="Buscar por nombre"
                className={classes.textField}
                margin="normal"
                placeholder="Search"
                onChange={this.filterList.bind(this)}
              />
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Paper>
          </Grid>
        </Grid>

        {/* PRODUCTOS */}
        <Grid container spacing={24} align="center">
          {
            products.map((product) => {
              if (filter == '' || (product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1 && !CategoryFilter || categories.indexOf(CategoryFilter) > -1)) {
                return (
                  <Grid item xs>
                    <Product product={product} addProductCart={this.props.addProductCart} />
                  </Grid>
                )
              }
            })
          }
        </Grid>
      </div>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProductCart: (product) => dispatch(addProductCart(product)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: () => dispatch(fetchProduct()),
    fetchCategories: () => dispatch(fetchCategories())
  };
}

const mapStateToProps = function (state) {
  return {
    products: state.products.products,
    categories: state.categories.categories
  };
}

MenuProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuProduct));