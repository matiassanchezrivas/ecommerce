import React from 'react'
import { connect } from 'react-redux'
import OrdersAdmin from '../components/OrdersAdmin';
import { fetchOrders } from '../action-creators/orders'





class OrdersAdminContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    
    componentDidMount(){
        console.log('segundo did');
        // axios a todos los datos de ordenes
        this.props.fetchOrders()
    }


 
    render() {
        return (
        <div>
            <OrdersAdmin orders={this.props.orders}/>
        </div>
        )
    }
}

const mapDispatchToProps = function (dispatch) {
    return ({
     fetchOrders: () => dispatch(fetchOrders()),
  })
  }
  
  
  const mapStateToProps = function (state) {
    return {
        currentUser: state.users.currentUser,
        orders: state.orders.orders
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(OrdersAdminContainer)
