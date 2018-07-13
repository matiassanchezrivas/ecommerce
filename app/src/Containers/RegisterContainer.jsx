import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            secondPassword: '',
            profilePic: '',
            name: '',
            surname: '',
            errorPass: false,
        };
        this.handleLocalLogin = this.handleLocalLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    componentDidMount() {
        
    }

    handleLocalLogin(event) {
        event.preventDefault();
        axios.post('/auth/register', {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name + ' ' + this.state.surname,
        })
            .then(res => res.data)
            .then((user) => {
                console.log('respuesta del login', user)
                this.props.setCurrentUser(user)
                console.log(this.props)
                this.props.history.push('/profile')
            })
            .catch((err) => {
                console.log(err)
                if (err.response.status) {
                    this.setState({ errorPass: true });
                }
            })
    }

    handleGoogleLogin(event) {
        axios.get('/auth/google')
            .then(response => console.log('response', response))
            .catch(err => console.log('err axios', err))
    }

    handleChange(evt) {
        //console.log(evt.target.id)
        const value = evt.target.value;
        this.state[evt.target.id] = value;
        this.state.errorPass = false;
        console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.root} spacing={16} direction="column" align="center">
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <form onSubmit={this.handleLocalLogin}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Nombre"
                                    type="email"
                                    fullWidth
                                    onChange={this.handleChange}
                                    error={this.state.errorPass}
                                    required={true}
                                />

                                <TextField
                                    margin="dense"
                                    id="surname"
                                    label="Apellido"
                                    type="email"
                                    fullWidth
                                    onChange={this.handleChange}
                                    error={this.state.errorPass}
                                    required={true}
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Correo electrónico"
                                    type="mail"
                                    fullWidth
                                    onChange={this.handleChange}
                                    error={this.state.errorPass}
                                    required={true}
                                />
                                <TextField
                                    margin="dense"
                                    id="password"
                                    label="Contraseña"
                                    type="password"
                                    fullWidth
                                    onChange={this.handleChange}
                                    error={this.state.errorPass}
                                    required={true}
                                />
                                <TextField
                                    margin="dense"
                                    id="secondPassword"
                                    label="Repetir contraseña"
                                    type="password"
                                    fullWidth
                                    onChange={this.handleChange}
                                    error={this.state.errorPass}
                                    required={true}
                                />
                                <Button className={classes.boton} onClick={this.handleLocalLogin} color="primary" type="submit">
                                    Registrarse </Button>
                                <Button variant="contained" onClick={this.handleGoogleLogin} color="secondary">
                                    Registro con Google
                            </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register))


// import React from 'react';
// import Playlist from '../components/Playlist';
// import { fetchPlaylist, addSong } from '../action-creators/playlists';
// import { start } from '../action-creators/player';
// import { fetchSongs } from '../action-creators/songs';
// import { connect } from 'react-redux'

// class PlaylistContainer extends React.Component {

//   componentDidMount() {
//     this.props.fetchPlaylist(this.props.match.params.id);
//     this.props.fetchSongs();
//     console.log('PROPS PLAYLIST CONTAINER', this.props)
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.match.params.id !== this.props.match.params.id) {
//       this.props.fetchPlaylist(nextProps.match.params.id);
//     }
//   }

//   render() {
//     return (
//       <Playlist
//         playlist={this.props.playlist}
//         start={this.props.start}
//         currentSong={this.props.currentSong}
//         addSong={this.props.addSong}
//         songs={this.props.songs}
//       />
//     );
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     start: (song, list) => dispatch(start(song, list)),
//     fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
//     fetchSongs: () => dispatch(fetchSongs()),
//     addSong: (song) => dispatch(addSong(song))

//   };
// }

// const mapStateToProps = function (state) {
//   console.log('STATE DEL PLAYLISTCONTAINER', state)
//   return {
//     currentSong: state.player.currentSong,
//     playlist: state.playlists.selected,
//     songs: state.songs
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer)

