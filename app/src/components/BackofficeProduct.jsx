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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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
  title: {
    color: 'red',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    color: theme.palette.common.white,
  },
});

const currencies = [];

class BackofficeUser extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: null,
      admin: false,
      active: false,
      price: 0,
      stock: 0,
      description: '',
      name: '',
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

  handleChangeTextField = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  componentDidMount() {
    const { available, description, stock, price, name } = this.props.product;
    this.setState({
      available, description, stock, price, name
    })
  }

  render() {
    const { classes, product } = this.props;
    return (<ExpansionPanel expanded={this.state.expanded === 'panel4'} onChange={this.togglePanel('panel4')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container className={classes.root} spacing={16} direction="column" align="center">
          <Grid item xs={12}>
            <Avatar
              alt={product.name}
              src={product.images[0]}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <Typography>
              {product.name}
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
                  checked={this.state.available}
                  onChange={this.handleChangeSwitch('available')}
                  value='available'
                />
              }
              label="Disponible"
            />
            <FormControl className={classes.input}>
              <InputLabel htmlFor="adornment-amount">Precio</InputLabel>
              <Input
                id="price"
                value={this.state.price}
                onChange={this.handleChangeTextField('price')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}

              />
            </FormControl>
            <FormControl className={classes.input}>
              <InputLabel htmlFor="adornment-amount">Stock</InputLabel>
              <Input
                id="stock"
                value={this.state.stock}
                onChange={this.handleChangeTextField('stock')}
              />
            </FormControl>
            <TextField
              value={this.state.name}
              label="Nombre"
              fullWidth
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              value={this.state.description}
              label="Descripción"
              multiline
              fullWidth
              rowsMax="4"
              onChange={this.handleChange('description')}
              margin="normal"
            />
          </Grid>
          <Grid item xs>
            {/* <TextField
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
            /> */}

          </Grid>
          <Grid item xs>
            <GridList className={classes.gridList} cols={2.5}>
              {product.images.map((img, i) => (
                <GridListTile key={i}>
                  <img src={img} />
                  <GridListTileBar
                    // title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton>
                        <StarBorderIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
        <Button variant="fab" className={classes.fab} color={classes.fab.color}>
          <AddIcon />
        </Button>
        <Button variant="fab" className={classes.fab} color={classes.fab.color}>
          <removeIcon />
        </Button>
      </ExpansionPanelDetails>
    </ExpansionPanel>)
  }
}

BackofficeUser.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackofficeUser);

// admin: this.props.user.admin === 'admin',