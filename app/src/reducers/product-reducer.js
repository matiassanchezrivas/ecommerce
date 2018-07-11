import { ADD_TO_CART } from '../constants';

const initialState = {
  cart: [
    {Nombre:"iphone 5", descripcion:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica',imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfnD5ehNmZO3CeClig1Zacs8hybmYyRevuF6ajW7Utd2ToQh2",categoria: "categoria 1"}
  ],

};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.product )
      };    
    default:
      return state;
  }
};