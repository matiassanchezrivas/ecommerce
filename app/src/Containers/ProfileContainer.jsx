import React from 'react';
import Profile from '../components/Profile';
import Orders from './OrdersContainer';
import axios from 'axios';
import { connect } from 'react-redux'
import { fetchOrders } from '../action-creators/orders'

class ProfileContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        userArrived: false
    }
    componentDidMount(){
        // this.props.currentUser && this.props.fetchOrders(this.props.currentUser.id)
        // console.log('user2', this.props.currentUser)
        // this.props.fetchOrders(this.props.currentUser.id);
    }
    componentWillReceiveProps(nextProps) {
        if(!this.state.userArrived) {
            this.setState({
                userArrived: true
            }, ()=> this.props.fetchOrders(nextProps.currentUser.id))
        }
    }

    render() {
        console.log('current user', this.props.currentUser)

        return (
            <div>
                <Profile currentUser={this.props.currentUser} />
                <Orders orders={this.props.orders} {...this.props} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOrders: (id) => dispatch(fetchOrders(id))
    }
  }
  
  const mapStateToProps = function (state) {
    return {
      currentUser: state.users.currentUser,
      orders: state.orders.orders
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);