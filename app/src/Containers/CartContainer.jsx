

import React, { PureComponent } from 'react'
import Cart from '../components/Cart'

let id = 0;
function createData(img, title, price, cantidad) {
  id += 6;
  return { id, img, title, price, cantidad };
}

function createUser(img, name) {
  id += 6;
  return { id, img, name};
}


const User = createUser('https://nssdata.s3.amazonaws.com/images/galleries/9391/cover.jpg', 'Nicolas Bernal');

const data = [
  createData('https://images.evo.com/imgp/700/122201/538568/dc-focus-snowboard-2018-145.jpg', 'DC Focus Snowboard 2017', 150 , 2),
  createData('https://cdn.luxedb.com/wp-content/uploads/2011/11/Star-Wars-Inspired-Products-from-Burton-Snowboards-4.jpg', 'DC Focus Snowboard 2017, DC Focus Snowboard 2017', 200 , 1),
  createData('https://i.pinimg.com/originals/d4/ef/78/d4ef78ebe0e01369d9e162afcf88b16f.jpg', 'DC Focus Snowboard 2017', 100 , 5),
  createData('http://img0.biker-boarder.de/detail_oxp1/atomic17_an5105326_savor_otg_photo_black_photochromic.jpg', 'DC Focus Snowboard 2017', 113 , 1),
];

export class CartContainer extends PureComponent {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      items: data,
      total: 0,
      user: User,
    };
    this.vaciarCart = this.vaciarCart.bind(this);
    this.updateCantidad = this.updateCantidad.bind(this);
    this.delProduct = this.delProduct.bind(this);
  }

  componentDidMount() {
    this.calculatePrice()
  }


  componentDidUpdate() {
    this.calculatePrice()
  }

  calculatePrice() {
    // Actualizar el precio en real time contando las cantidades
    var pricesList = this.state.items.map(function(p) {
      // Calculo con cantidad de productos
      return p.price * p.cantidad});
    var total = pricesList.reduce(function(a, b){ return a + b; }, 0);
    this.setState({total: total})
  }

  delProduct(index) {
    // Eliminar productos del carrito
    var itemsClone = this.state.items.slice();
    itemsClone.splice(index,1)
    this.setState({items: itemsClone})
  }

  updateCantidad(e, index){
    console.log(e.target.value)
    if (e.target.value === '0') {
      this.delProduct(index)
    } else {
    // incremento y decremento de cantidad
    this.setState({items: [
      ...this.state.items.slice(0,index),
      {...this.state.items[index], cantidad: e.target.value},
      ...this.state.items.slice(index + 1)
    ]})
  }
  }

  vaciarCart(){

    this.setState({ 
      items: [],
      total: 0,
    })
  }




  render() {
    return (
      <Cart user={this.state.user} items={this.state.items} eliminar={this.delProduct} total={this.state.total} cantidad={this.updateCantidad} vaciar={this.vaciarCart}/>
    )
  }
}

export default CartContainer
