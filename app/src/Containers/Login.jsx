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

const Path = require('path');

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
            password: ''
        };
        this.handleLocalLogin = this.handleLocalLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLocalLogin(event) {
        event.preventDefault();
        console.log('entra al handle login')
        // axios.post('/auth/login', { mail: this.state.email, password: this.state.password })
        //     .then(
        //         (response) => { console.log(response) }
        //     )
        //     .catch((err) => {
        //         console.log(err)
        //     }
        //     )

        axios.post('/auth/login', { mail: 'sdasda', password: 'asdasd' })

        axios.get('/order').then(
            (response) => { console.log(response) }
        )

    }

    handleChange(evt) {
        const value = evt.target.value;
        if (evt.target.id == 'email') {
            this.setState({
                email: value,
            });
        } else if (evt.target.id == 'pass') {
            this.setState({
                password: value,
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
                                />
                                <TextField
                                    margin="dense"
                                    id="password"
                                    label="Contraseña"
                                    type="password"
                                    fullWidth
                                    onChange={this.handleChange}
                                />
                                <Button className={classes.boton} onClick={this.handleLocalLogin} color="primary" type="submit">
                                    Iniciar sesión </Button>
                                <Button variant="contained" color="secondary">
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

export default withStyles(styles)(Login);