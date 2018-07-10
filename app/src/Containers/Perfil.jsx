import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import axios from '../config/axios.js'

import { connect } from 'react-redux'
import { setCurrentUser } from '../action-creators/user'


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 5
    },
    paper: {
        paddingLeft: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 5,
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    boton: {
        margin: theme.spacing.unit * 2,
    }
});



class perfil extends Component {
    constructor() {
        super()
        this.state = {
            logged: false
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>EL PERFIL</h1>
                <h2>El user es {this.props.currentUser.email}</h2>
            </div >
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUser(user))
    };
}

const mapStateToProps = function (state) {
    return {
        currentUser: state.users.currentUser,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(perfil))