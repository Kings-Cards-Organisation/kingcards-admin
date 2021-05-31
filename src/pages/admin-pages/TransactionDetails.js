import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/AppBar';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Wrapper } from "../../components";
import { makeStyles } from '@material-ui/core/styles';
import demoTrades from '../../server/demo-user-data/demoTrades'
import demoWithdrawals from '../../server/demo-user-data/demoWithdrawals'


const useStyles = makeStyles(theme => ({
    appBar: {
      backgroundColor: 'rgba(0,0,0,.3)',
      boxShadow: '0 1px 8px rgba(0,0,0,.3)',
      position: 'relative',
      zIndex: theme.zIndex.drawer + 100,
      [theme.breakpoints.down('sm')]: {
        position: 'fixed'
      }
    },
    toolBar: {
      paddingLeft: theme.spacing(1) / 2,
      paddingRight: theme.spacing(1) / 2,
      margin: 'auto'
    },
    searchWrapper: {
      flex: '1 1 0%',
      boxSizing: ' border-box'
    },
    searchForm: {
      background: 'white',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginRight: theme.spacing(1) * 2,
      paddingRight: theme.spacing(10) * 2.5,
      display: 'block',
      maxWidth: '800px'
    },
    searchInput: {
      fontSize: '1rem',
      padding: theme.spacing(1) * 1.5,
      paddingRight: theme.spacing(10) * 2.5,
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1) * 1.2
      },
      marginRight: theme.spacing(1) * 2,
      cursor: 'text',
      border: 'none',
      background: 'transparent',
      width: '100%',
      outline: '0'
    },
    searchIcon: {
      position: 'absolute',
      top: '50%',
      left: theme.spacing(1) * 2,
      marginTop: '-24px',
      color: 'rgba(0,0,0,.87)'
    },
    stepDown: {
      marginTop: theme.spacing(1)
    },
    alignRight: {
      textAlign: 'right'
    },
    green: {
      color: 'green'
    },
    red: {
      color: 'red'
    },
    yellow: {
      color: '#ffd740'
    }
}));

const TransactionDetails = (props) => {

    const classes = useStyles();
    const { id } = useParams()

    const goToPreviousPage = () => {
        window.history.go(-1)
    }

    const transaction = (() => {
        if (props.transactionType === 'withdrawal') {
            for (let index = 0; index < demoWithdrawals.length; index++) {
                if (demoWithdrawals[index].transactionId === id) {
                    return demoWithdrawals[index]
                }
            }
        } else if (props.transactionType === 'trade') {
            for (let index = 0; index < demoTrades.length; index++) {
                if (demoTrades[index].transactionId === id) {
                    return demoTrades[index]
                }
            }
        }
    })()

    return (
        <Wrapper>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Grid container spacing={1}>
                        <Grid item xs={2} sm={2} md={2}>
                            <Hidden xsDown>
                                <IconButton className={classes.searchIcon} onClick={goToPreviousPage}>
                                    <ArrowBack />
                                </IconButton>
                            </Hidden>
                        </Grid>
                        
                        <Grid item xs={10} sm={6} md={6}>
                            <Hidden xsDown>
                                <Typography
                                    variant="h5"
                                >
                                    {props.transactionType}
                                </Typography>
                            </Hidden>
                        </Grid>
                        
                        <Grid item>
                            <Hidden xsDown>
                                <div className={classes.searchWrapper}></div>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Grid container spacing={2} className={classes.stepDown}>
                <Grid item xs={12} sm={12} md={12}>
                    <Card xs={12} sm={12} md={12}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                    >
                                        Transaction ID: {id}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                    >
                                        Status: {transaction.status === 'approved' && (
                                            <Typography
                                                variant="caption"
                                                className={classes.green}
                                            >
                                                {transaction.status}
                                            </Typography>
                                        )}

                                        {transaction.status === 'declined' && (
                                            <Typography
                                                variant="caption"
                                                className={classes.red}
                                            >
                                                {transaction.status}
                                            </Typography>
                                        )}

                                        {transaction.status === 'pending' && (
                                            <Typography
                                                variant="caption"
                                                className={classes.yellow}
                                            >
                                                {transaction.status}
                                            </Typography>
                                        )}
                                    </Typography>
                                </CardContent>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <CardContent className={classes.alignRight}>
                                    <Typography
                                        variant="caption"
                                    >
                                        Date: {transaction.date}
                                    </Typography>
                                    <br/>
                                    <Typography
                                        variant="caption"
                                    >
                                        time: {transaction.time}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography
                        variant="h4"
                    >
                        Amount: {transaction.amount}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography
                        variant="h5"
                    >
                        Name: {transaction.user}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography
                        variant="caption"
                    >
                        Initial balance: {transaction.initialBalance}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography
                        variant="caption"
                    >
                        Final balance: {transaction.finalBalance}
                    </Typography>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default TransactionDetails