import React from 'react';
import Profile from '../components/Profile';
import Orders from '../components/Orders';
import axios from 'axios';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            orders: []
        }
    }

    componentDidMount() {
        axios.get(`/user/${1}`)
            .then(response => {
                return response.data
            })
            .then(user => {
                this.setState({
                    user: user
                }, () => this.receiveOrders(this.state.user.type))
            });


    }

    receiveOrders(userType) {
        if (userType === 'admin') {
            axios.get(`/order`)
            .then(response => {
                return response.data
            })
            .then(orders => {
                this.setState({
                    orders: orders
                })
            });
            
        }
        if (userType == 'regular') {
            console.log('regular', userType)
            axios.get(`/order/${2}`)
                .then(response => {
                    return response.data
                })
                .then(orders => {
                    this.setState({
                        orders: orders
                    })
                });
        }
    }

    render() {
        return (
            <div>
                <Profile profile={this.state.user} />
                <Orders orders={this.state.orders} />
            </div>
        )
    }
}

export default ProfileContainer;
