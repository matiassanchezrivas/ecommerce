import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import axios from '../config/axios'
import { connect } from 'react-redux'
import { setCurrentUser } from '../action-creators/user'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  Appbar: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  margin: {
    margin: theme.spacing.unit * 1,
  },
});

class MenuAppBar extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: true,
      anchorEl: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = () => {
    axios.get('/auth/logout')
      .then(res => res.data)
      .then((res) => {
        this.props.setCurrentUser({});
        this.props.history.push('/login')
      })
    this.handleClose();
  };

  handleLogIn = () => {
    this.props.history.push('/login')
    this.handleClose();
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className={classes.Appbar} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Ecommerce
            </Typography>

            <Link to='/cart' className={classes.link}>

              <IconButton
                aria-owns={open ? 'shopping-cart' : null}
                aria-haspopup="true"
                color="inherit"
              >
                <Badge color='secondary' badgeContent={this.props.cart.items.length} className={classes.margin}>
                  <ShoppingCart />
                </Badge>
              </IconButton>

            </Link>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  {(!this.props.currentUser.profilePicture)
                    ?
                    <AccountCircle />
                    :
                    <Avatar
                      alt={this.props.currentUser.name}
                      src={this.props.currentUser.profilePicture}
                    />
                  }
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {
                    (this.props.currentUser.email) ?
                      (<div>
                        <Link to='/user' className={classes.link}><MenuItem onClick={this.handleClose}>Perfil</MenuItem></Link>
                        <Link to='/index' className={classes.link}><MenuItem onClick={this.handleClose} >Mis compras</MenuItem></Link>
                        <MenuItem onClick={this.handleLogOut}>Cerrar sesión</MenuItem></div>)
                      :
                      <MenuItem onClick={this.handleLogIn}>Iniciar sesión</MenuItem>
                  }
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div >
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {}
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.users.currentUser,
    cart: state.cart,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuAppBar))