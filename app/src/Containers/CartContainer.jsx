

import React, { PureComponent, Component } from 'react'
import Cart from '../components/Cart'

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

export class CartContainer extends PureComponent {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      items: data,
      total: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    
    

  }

  handleClick(index) {
    var itemsClone = this.state.items.slice();
    itemsClone.splice(index,1)
    this.setState({items: itemsClone})
  }


  render() {
    var pricesList = this.state.items.map(function(p) {
      return p.price;
    });
    var total = pricesList.reduce(function(a, b){ return a + b; });
    this.setState({total: total})

    return (
      
      <Cart items={this.state.items} eliminar={this.handleClick} total={this.state.total}/>
    )
  }
}

export default CartContainer
