import React, { Component } from 'react';
import './Body.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import blue from 'material-ui/colors/blue';
import Avatar from 'material-ui/Avatar';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 180,
        width: 170,
    },
    control: {
        padding: theme.spacing.unit * 3,
    },
    badge: {
        marginTop: 10,
    },
    title: {
        paddingTop: 5,
    },
    itemGrid: {
        marginTop: 20,
    },
    divContent: {
        marginTop: 20,
    },
    avatar: {
        color: '#fff',
        backgroundColor: blue[500],
    },
    avatarControl: {
        justifyContent: "Center",
        display: "Flex",
    },
    progressControl: {
        color: theme.palette.primary.main
    }
});

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coins: [],
            isLoad: false,
        };
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url : 'https://api.coinmarketcap.com/v1/ticker/',
        }).then((response) => {
            this.setState({
                coins: response.data,
                isLoad: true
            })
        }).catch((err) =>{
            this.setState({
                coins: [],
                isLoad: true
            })
        });
    }

    render() {
        const { coins, isLoad   } = this.state;
        const { classes } = this.props;

        return (
            <div className="body-container">
                {isLoad === true ? (
                    <Grid container>
                    {coins.map(value => (
                    <Grid container key={value.id} xs={2} justify="center" className={classes.itemGrid}>
                        <Paper className={classes.paper}>
                            <div>
                                <Typography variant="headline" className={classes.title}>
                                    {value.name}
                                </Typography>
                            </div>
                            <div className={classes.avatarControl}>
                                <Avatar className={classes.avatar}>{value.symbol.substring(0,2)}</Avatar>
                            </div>
                            <div style={{ marginTop: '10px'}}>
                                <Typography variant="title">
                                    $ {value.price_usd}
                                </Typography>
                                { value.percent_change_1h < 0 ? 
                                    (
                                        <Typography variant="title" style ={{color: 'red'}}>
                                            {value.percent_change_1h}%
                                        </Typography>
                                    ) : (
                                        <Typography variant="title" style ={{color: 'green'}}>
                                            {value.percent_change_1h}%
                                        </Typography>
                                    )
                                }
                            </div>
                        </Paper>
                    </Grid>
                    ))}
                </Grid>
                ) : (
                    <Grid container style = {{height: "300px", alignItems: "center", display: "flex", justifyContent: "center"}}>
                        <CircularProgress classes={{circleIndeterminate: classes.progressControl}} size={71} />
                    </Grid>
                ) }
            </div>
        );
    }
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);