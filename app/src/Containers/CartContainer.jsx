
import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import Cart from '../components/Cart'
import { RemoveProductCart, updateQuantCart, emptyCart } from '../action-creators/cart'


let id = 0;
function createData(img, title, price, cantidad) {
  id += 6;
  return { id, img, title, price, cantidad };
}

function createUser(img, name) {
  id += 6;
  return { id, img, name };
}


const User = createUser('https://nssdata.s3.amazonaws.com/images/galleries/9391/cover.jpg', 'Nicolas Bernal');

const data = [
  createData('https://images.evo.com/imgp/700/122201/538568/dc-focus-snowboard-2018-145.jpg', 'DC Focus Snowboard 2017', 150, 2),
  createData('https://cdn.luxedb.com/wp-content/uploads/2011/11/Star-Wars-Inspired-Products-from-Burton-Snowboards-4.jpg', 'DC Focus Snowboard 2017, DC Focus Snowboard 2017', 200, 1),
  createData('https://i.pinimg.com/originals/d4/ef/78/d4ef78ebe0e01369d9e162afcf88b16f.jpg', 'DC Focus Snowboard 2017', 100, 5),
  createData('http://img0.biker-boarder.de/detail_oxp1/atomic17_an5105326_savor_otg_photo_black_photochromic.jpg', 'DC Focus Snowboard 2017', 113, 1),
];

export class CartContainer extends PureComponent {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      total: 0,
    };
    this.updateCantidad = this.updateCantidad.bind(this)
  }


  componentDidMount() {
    //con la session iniciada deber'ia traer data con axios en ves del local
    this.calculatePrice()
  }


  componentDidUpdate() {
    this.saveLocalStorage()
    this.calculatePrice()
  }

  calculatePrice() {
    // Actualizar el precio en real time contando las cantidades
    var pricesList = this.props.cart.items.map(function (p) {
      // Calculo con cantidad de productos
      return p.price * p.cantidad
    });
    var total = pricesList.reduce(function (a, b) { return a + b; }, 0);
    this.setState({ total: total })
  }


  updateCantidad(e, index) {
    var value = e.target.value
    console.log(e.target.value)
    if (e.target.value == '0') {
      this.props.RemoveProductCart(index)
    } else {
      // incremento y decremento de cantidad redux
      this.props.updateQuantCart(index, value)
    }
  }


  saveLocalStorage() {
    var itemsClone = this.props.cart.items.slice();
    localStorage.setItem("Cart", JSON.stringify(itemsClone));
  }

  // getLocalStorage(){
  //   var LocalCart = JSON.parse(localStorage.getItem("Cart"));
  //   this.setState({items: LocalCart})
  // }


  CkeckOut() {
    //owner == current user

    // axios.post('/api/orders')
    // .then(res => res.data)
    // .then(orders => dispatch(receiveOrders(orders)));
  }





  render() {
    return (
      <Cart userC={this.props.cart.owner} items={this.props.cart.items} eliminar={this.props.RemoveProductCart} total={this.state.total} cantidad={this.updateCantidad} vaciar={this.props.emptyCart} />
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return ({
    RemoveProductCart: (product) => dispatch(RemoveProductCart(product)),
    updateQuantCart: (index, value) => dispatch(updateQuantCart(index, value)),
    emptyCart: (cart) => dispatch(emptyCart(cart))
  })
}


const mapStateToProps = function (state) {
  return {
    cart: state.cart,
    currentUser: state.users.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
