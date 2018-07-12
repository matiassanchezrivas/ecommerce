import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    title: {
        borderBottom: '1px dotted black'

    },
    usuarios: {
        textAlign: 'left'
    },
    b1: {
        marginLeft: '20px'
    },
    foto: {
        borderRadius: '50%',
        width: '150px',
        height: '150px'
    }

});

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, currentUser } = this.props;

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid container spacing={8}>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={10}>
                            <div className={classes.paper}>
                                <div>
                                    <h2 className={classes.title}>Datos de usuario</h2>
                                    <Grid container spacing={8}>
                                        <Grid item xs={5}>
                                            <img className={classes.foto} src={this.props.currentUser.profilePicture} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className={classes.usuarios}>

                                                <p>usuario: {currentUser.name}</p>
                                                <p>password: <span>{'*********'}</span>
                                                    <Button className={classes.b1} onClick={this.handleClickOpen}>Modificar</Button>
                                                </p>
                                                <p>email: {currentUser.email}</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <h2 className={classes.title}>Datos de la cuenta</h2>
                                    <Grid container spacing={8}>
                                        <Grid item xs={5}>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div className={classes.usuarios}>
                                                <p>tipo: {currentUser.type}</p>
                                                <p>estado: {currentUser.status}</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </form>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Modificar contraseña</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Ingrese una nueva contraseña.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Cambio de contraseña"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);