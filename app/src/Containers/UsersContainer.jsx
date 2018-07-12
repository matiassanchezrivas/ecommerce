import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from '../config/axios.js'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import BackofficeUser from '../components/BackofficeUser'
import { fetchUsers } from '../action-creators/user'

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

class Users extends Component {
    constructor() {
        super()
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        console.log(this.props.users)
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.root} spacing={16} direction="column" align="center">
                    <Grid item xs={8}>
                        {
                            this.props.users.map((user) => {
                                return <BackofficeUser key={user.id} user={user} />
                            })
                        }
                    </Grid>
                </Grid>
            </div >
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
}

const mapStateToProps = function (state) {
    return {
        users: state.users.users,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Users))