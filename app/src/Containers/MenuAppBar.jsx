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

const styles = {
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
  }
};

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
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar className={classes.Appbar} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Ecommerce
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
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
                  <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={this.handleClose}>Mis compras</MenuItem>
                  <MenuItem onClick={this.handleLogOut}>Cerrar sesión</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    // start: (song, list) => dispatch(start(song, list)),
    // fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    // fetchSongs: () => dispatch(fetchSongs()),
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuAppBar))