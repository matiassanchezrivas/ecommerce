import React from 'react';
import Profile from './Profile';
import Orders from './Orders';


var fakeUser = [
    {
        name: 'Nico',
        password: 'TodoBien1234',
        email: 'nico@pastaflora5.la',
        type: 'admin',
        status: 'active'
    },
    {
        name: 'Mati',
        password: 'TodoBien4567',
        email: 'mati@pastaflora5.la',
        type: 'admin',
        status: 'active'
    },
    {
        name: 'Juan',
        password: 'TodoBien8910',
        email: 'juan@pastaflora5.la',
        type: 'regular',
        status: 'active'
    },
    {
        name: 'Ariel',
        password: 'TodoBien1112',
        email: 'ariel@pastaflora5.la',
        type: 'regular',
        status: 'inactive'
    },

]

var fakeOrder = []

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: fakeUser,
            orders: fakeOrder
        }
    }
    componentDidMount() {
        console.log('this.state.user en el container ', this.state.user)
    }
    render() {
        return (
            <div>
                <Profile profile={this.state.user} />
                <Orders />
            </div>
        )
    }
}

export default ProfileContainer;
