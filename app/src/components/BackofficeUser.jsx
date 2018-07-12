import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
  input: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class BackofficeUser extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: null,
      admin: false,
      active: false,
    };
    this.handleChange.bind(this)
    this.togglePanel.bind(this)
    console.log('entra al user')
  }

  togglePanel = panel => (event, expanded) => {
    console.log('expanded', expanded)
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChangeSwitch = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  componentDidMount() {
    this.setState({
      admin: this.props.user.type == 'admin',
      active: this.props.user.status == 'active',
    })
  }

  render() {
    const { classes, user } = this.props;
    return (<ExpansionPanel expanded={this.state.expanded === 'panel4'} onChange={this.togglePanel('panel4')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container className={classes.root} spacing={16} direction="column" align="center">
          <Grid item xs={12}>
            <Avatar
              alt="Adelle Charles"
              src={user.profilePicture}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <Typography>
              Nombre: {user.name}
            </Typography>
            <Typography>
              Id: {user.id}
            </Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container className={classes.root} spacing={16} direction="column" align="center">
          <Grid item xs>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.active}
                  onChange={this.handleChangeSwitch('active')}
                  value='active'
                />
              }
              label="Activo"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.admin}
                  onChange={this.handleChangeSwitch('admin')}
                  value='admin'
                />
              }
              label="Administrador"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="name"
              label="Nombre"
              defaultValue={user.name}
              className={classes.input}
              onChange={this.handleChange('name')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="id"
              label="Id del usuario"
              className={classes.input}
              defaultValue={user.id}
              onChange={this.handleChange('id')}
              margin="normal"
              disabled
              fullWidth
            />
            <TextField
              id="email"
              label="Correo electrónico"
              className={classes.input}
              defaultValue={user.email}
              onChange={this.handleChange('email')}
              margin="normal"
              fullWidth
            />

          </Grid>
          <Grid item xs>

          </Grid>
        </Grid>

      </ExpansionPanelDetails>
    </ExpansionPanel>)
  }
}

BackofficeUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackofficeUser);

// admin: this.props.user.admin === 'admin',