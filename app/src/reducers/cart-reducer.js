import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, EMPTY_CART, UPDATE_QUANT_CART, SET_TOTAL_CART, SET_ORDER_FROM_CART, CHECKOUT_CART } from '../constants';

// data falsa   //


// let id = 0;
// function createData(img, title, price, cantidad) {
//   id += 6;
//   return { id, img, title, price, cantidad };
// }

// function createUser(img, name) {
//   id += 6;
//   return { id, img, name};
// }


// const User = createUser('https://nssdata.s3.amazonaws.com/images/galleries/9391/cover.jpg', 'Nicolas Bernal');

// const data = [
//   createData('https://images.evo.com/imgp/700/122201/538568/dc-focus-snowboard-2018-145.jpg', 'DC Focus Snowboard 2017', 150 , 2),
//   createData('https://cdn.luxedb.com/wp-content/uploads/2011/11/Star-Wars-Inspired-Products-from-Burton-Snowboards-4.jpg', 'DC Focus Snowboard 2017, DC Focus Snowboard 2017', 200 , 1),
//   createData('https://i.pinimg.com/originals/d4/ef/78/d4ef78ebe0e01369d9e162afcf88b16f.jpg', 'DC Focus Snowboard 2017', 100 , 5),
//   createData('http://img0.biker-boarder.de/detail_oxp1/atomic17_an5105326_savor_otg_photo_black_photochromic.jpg', 'DC Focus Snowboard 2017', 113 , 1),
// ];

// data falsa   //

const initialState = {
  owner: null,
  items: [],
  status: 'carrito',
  total: 0,
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT_CART:
      var index = action.index
      return {
        ...state,
        items: [].concat(state.items.slice(0, index), state.items.slice(index+1, state.items.length))
    };
    case ADD_PRODUCT_CART:
      
      return {
        ...state,
        items: state.items.concat(action.product )
    };
    case UPDATE_QUANT_CART:
      var i = action.index
      const value = action.value
      return {
        ...state,
        items: [
          ...state.items.slice(0,i),
          {...state.items[i], cantidad: value},
          ...state.items.slice(i + 1)
        ]
    };
    case EMPTY_CART:
    return {
      ...state,
      items: []
  };


    default:
      return state;
  }
};