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

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
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
        console.log('entra al handle login con ' + this.state.password + ' ' + this.state.email);

        axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
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
        console.log(evt.target.id)
        const value = evt.target.value;
        if (evt.target.id === 'email') {
            this.setState({
                email: value,
                errorPass: false
            });
        } else if (evt.target.id === 'password') {
            this.setState({
                password: value,
                errorPass: false
            });
        }

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
                                    id="email"
                                    label="Correo electrónico"
                                    type="email"
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
                                <Button className={classes.boton} onClick={this.handleLocalLogin} color="primary" type="submit">
                                    Iniciar sesión </Button>
                                <Button variant="contained" onClick={this.handleGoogleLogin} color="secondary">
                                    Iniciar sesión con Google
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))

