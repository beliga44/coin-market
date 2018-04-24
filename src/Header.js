import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'
import indigo from 'material-ui/colors/indigo';
import { withStyles } from 'material-ui'

const styles = theme => ({
    title: {
        fontFamily: 'Source Serif Pro, serif',
        color: theme.palette.primary.main
    }
});

class Header extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className='header-container'>
                <Grid container>
                    <Grid item xs justify="center">
                        <Typography variant="display2" className={classes.title}>
                            Coin Market
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Header);