import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import axios from '../config/axios.js'
import { connect } from 'react-redux'


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
        axios.get('/user/userLog')
            .then(res => res.data)
            .then((res) => {
                console.log(res)
            })
    }

    render() {
        const { classes } = this.props;
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
        // start: (song, list) => dispatch(start(song, list)),
        // fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
        // fetchSongs: () => dispatch(fetchSongs()),
        // addSong: (song) => dispatch(addSong(song))
    };
}

const mapStateToProps = function (state) {
    //console.log('STATE DEL PLAYLISTCONTAINER', state)
    return {
        currentUser: state.users.currentUser,
        // playlist: state.playlists.selected,
        // songs: state.songs
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(perfil))