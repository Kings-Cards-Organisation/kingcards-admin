import { Bar } from "react-chartjs-2";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import {
    StatCard,
    Wrapper
} from "../../components";

import {
    dailyWithdrawals,
    dailyWithdrawalVolume,
} from "../../server/admin-charts/demoCharts";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Typography from '@material-ui/core/Typography';

// import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import LocalOfferIcon from "@material-ui/icons/LocalOffer";
// import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/More";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from "@material-ui/icons/Settings";
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import withdrawals from '../../server/demo-user-data/demoWithdrawals'
import { Button } from "@material-ui/core";


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
    paddingRight: theme.spacing(10) * 2.5,
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(2) * 2.5,
      minWidth: '75vw'
    },
    display: 'block',
    maxWidth: '800px'
  },
  searchInput: {
    fontSize: '1rem',
    padding: theme.spacing(1) * 1.5,
    paddingRight: theme.spacing(10) * 2.5,
    marginRight: theme.spacing(1) * 2,
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(2) * 2.5,
      maxWidth: '70vw'
    },
    cursor: 'text',
    border: 'none',
    background: 'transparent',
    width: '100%',
    outline: '0'
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    right: '0',
    marginTop: '-24px',
    color: 'rgba(0,0,0,.87)'
  },
  stepDown: {
    marginTop: theme.spacing(5)
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
  },
  greenBackground: {
    backgroundColor: 'green',
    color: 'white'
  },
  redBackground: {
    backgroundColor: 'red',
    color: 'white'
  },
  transparentBackground: {
    width: '100%',
    position: 'relative',
    left: '0px',
    zIndex: 2,
    backgroundColor: 'rgb(0, 0, 0, 0.25)'
  },
  centerContent: {
    display: 'flex',
    justifyContent: 'center'
  }
}));


const useForceUpdate = () => {
    const [forcedTransaction, setForcedTransaction] = useState(0)
    return () => setForcedTransaction(forcedTransaction + 1)
}

const Withdrawal = () => {
    const classes = useStyles();
    const [date, setDate] = useState('all')
    const [type, setType] = useState('all')
    const [transactionAnchorEl, setTransactionAnchorEl] = useState(null)
    const [chartAnchorEl, setChartAnchorEl] = useState(null)
    const [transactionId, setTransactionId] = useState('')
    const [demoWithdrawals, setDemoWithdrawals] = useState(withdrawals)

    const forceUpdate = useForceUpdate()

    const handleChangeDate = (event) => setDate(event.target.value)
    const handleChangeType = (event) => setType(event.target.value)
    const handleOpenChartMenu = (event) => setChartAnchorEl(event.currentTarget);
    const handleCloseChartMenu = () => setChartAnchorEl(null);
    const handleOpenTransactionMenu = (event) => setTransactionAnchorEl(event.currentTarget);
    const handleCloseTransactionMenu = () => setTransactionAnchorEl(null)
    const handleSetTransactionId = (transactionId) => setTransactionId(transactionId)

    const handleApprove = (transactionId) => {
        for (let index = 0; index < demoWithdrawals.length; index++) {
            if (demoWithdrawals[index].transactionId === transactionId) {
                demoWithdrawals[index].status = 'approved'
                demoWithdrawals.splice(index, 1, demoWithdrawals[index])
                return setDemoWithdrawals(demoWithdrawals)
            }
        }
    }

    const handleDecline = (transactionId) => {
        for (let index = 0; index < demoWithdrawals.length; index++) {
            if (demoWithdrawals[index].transactionId === transactionId) {
                demoWithdrawals[index].status = 'declined'
                demoWithdrawals.splice(index, 1, demoWithdrawals[index])
                return setDemoWithdrawals(demoWithdrawals)
            }
        }
    }
    
    const setSelectedTransactionId = (transactionId, event) => {
        handleSetTransactionId(transactionId)
        handleOpenTransactionMenu(event)
    }

    const chartMenu = (
        <Menu
          id="chart-menu"
          anchorEl={chartAnchorEl}
          open={Boolean(chartAnchorEl)}
          onClose={handleCloseChartMenu}
        >
          <MenuItem onClick={handleCloseChartMenu}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <MenuItem onClick={handleCloseChartMenu}>
            <ListItemIcon>
              <MoreIcon />
            </ListItemIcon>
            <ListItemText primary="View more" />
          </MenuItem>
        </Menu>
      );

    const transactionMenu = (
        <Menu
            id="transaction-item-menu"
            anchorEl={transactionAnchorEl}
            open={Boolean(transactionAnchorEl)}
            onClose={handleCloseTransactionMenu}
        >
            <Link to={`/admin/withdrawals/${transactionId}`}>
                <MenuItem onClick={handleCloseTransactionMenu}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Details" />
                </MenuItem>
            </Link>

            <MenuItem onClick={handleCloseTransactionMenu}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="View User" />
            </MenuItem>
        </Menu>
    );

    return (
        <Wrapper>
            <Grid className={classes.transparentBackground}>
                <Toolbar>
                    <Grid container spacing={1}>
                        <Hidden>
                            <div className={classes.searchWrapper}></div>
                        </Hidden>
                        <Hidden>
                            <div className={classes.searchWrapper}>
                                <form  className={classes.searchForm}>
                                    <input
                                        className={classes.searchInput}
                                        type="text"
                                        placeholder="Enter transaction id / Username"
                                        autoFocus={true}
                                    />
                                    <IconButton aria-label="Search" className={classes.searchIcon}>
                                        <SearchIcon />
                                    </IconButton>
                                </form>
                            </div>
                        </Hidden>
                        <Hidden>
                            <div className={classes.searchWrapper}></div>
                        </Hidden>
                    </Grid>
                </Toolbar>
            </Grid>

            <Toolbar className={classes.stepDown}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6}>
                        <StatCard
                        type="fill"
                        title="Total Withdrawals ($)"
                        value={0}
                        color="#3f51b5" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <StatCard
                        type="fill"
                        title="Total Approved ($)"
                        value={0}
                        color="#51b53f" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <StatCard
                        type="fill"
                        title="Total Pending ($)"
                        value={0}
                        color="#ffd740" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <StatCard
                        type="fill"
                        title="Total Declined ($)"
                        value={0}
                        color="#f44336" />
                    </Grid>
                </Grid>
            </Toolbar>

            {chartMenu}

            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}></Grid>
                <Grid item xs={12} sm={12} md={12}></Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader
                        subheader={dailyWithdrawals.title}
                        action={
                            <IconButton id={`withdrawal-chart-menu-button`} onClick={handleOpenChartMenu}>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        />
                        <CardContent>
                        <Bar
                            data={dailyWithdrawals.data}
                            height={dailyWithdrawals.height}
                            options={dailyWithdrawals.options}
                        />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader
                        subheader={dailyWithdrawalVolume.title}
                        action={
                            <IconButton id={`withdrawal-volume-chart-menu-button`} onClick={handleOpenChartMenu}>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        />
                        <CardContent>
                        <Bar
                            data={dailyWithdrawalVolume.data}
                            height={dailyWithdrawalVolume.height}
                            options={dailyWithdrawalVolume.options}
                        />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}></Grid>
                <Grid item xs={12} sm={12} md={12}></Grid>

                <Grid item xs={6} sm={3} md={2} className={classes.centerContent}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Date</InputLabel>
                        <Select
                        labelId="date-select-outlined-label"
                        id="date-select-outlined"
                        value={date}
                        onChange={handleChangeDate}
                        label="Date"
                        >
                            <MenuItem value="all">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value="Today">Today</MenuItem>
                            <MenuItem value="set">Set</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} sm={3} md={2} className={classes.centerContent}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                        <Select
                        labelId="type-select-outlined-label"
                        id="type-select-outlined"
                        value={type}
                        onChange={handleChangeType}
                        label="Date"
                        >
                            <MenuItem value="all">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value="approved">Approved</MenuItem>
                            <MenuItem value="declined">Declined</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={12}></Grid>
            </Grid>

            {transactionMenu}

            <Grid container spacing={1}>
                {demoWithdrawals.map((withdrawal, index) => 
                    (<Fragment key={index}>
                        {type === 'all' && (
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                        subheader={`Transaction ID: ${withdrawal.transactionId}`}
                                        action={
                                            <IconButton id={`${withdrawal.transactionId}-menu-button`} onClick={(event) => setSelectedTransactionId(withdrawal.transactionId, event)}>
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                    />
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <CardContent>
                                                <Typography
                                                    variant="h5"
                                                >
                                                    ${withdrawal.amount}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.user}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.alignRight}>
                                            <CardContent>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.date}
                                                </Typography>
                                                <Grid>
                                                    {withdrawal.status === 'approved' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.green}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'declined' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.red}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'pending' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.yellow}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                    {withdrawal.status === 'pending' && (
                                        <Grid container spacing={1}>
                                            <Grid item  xs={6} sm={6} md={6} className={classes.centerContent}>
                                                <CardContent>
                                                    <Button variant="contained" className={classes.green} onClick={() => {handleApprove(withdrawal.transactionId); forceUpdate()}}>Approve</Button>
                                                </CardContent>
                                            </Grid>
                                            <Grid item  xs={6} sm={6} md={6} className={classes.centerContent}>
                                                <CardContent>
                                                    <Button variant="contained" className={classes.red} onClick={() => {handleDecline(withdrawal.transactionId); forceUpdate()}}>Decline</Button>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                    )}
                                </Card>
                            </Grid>
                        )}
                        {type === 'approved' && withdrawal.status === type && (
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                    subheader={`Transaction ID: ${withdrawal.transactionId}`}
                                    action={
                                      <IconButton id={`${withdrawal.transactionId}-menu-button`} onClick={(event) => setSelectedTransactionId(withdrawal.transactionId, event)}>
                                        <MoreVertIcon />
                                      </IconButton>
                                    }
                                    />
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <CardContent>
                                                <Typography
                                                    variant="h5"
                                                >
                                                    ${withdrawal.amount}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.user}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.alignRight}>
                                            <CardContent>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.date}
                                                </Typography>
                                                <Grid>
                                                    {withdrawal.status === 'approved' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.green}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'declined' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.red}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'pending' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.yellow}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        )}
                        {type === 'declined' && withdrawal.status === type && (
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                    subheader={`Transaction ID: ${withdrawal.transactionId}`}
                                    action={
                                      <IconButton id={`${withdrawal.transactionId}-menu-button`} onClick={(event) => setSelectedTransactionId(withdrawal.transactionId, event)}>
                                        <MoreVertIcon />
                                      </IconButton>
                                    }
                                    />
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <CardContent>
                                                <Typography
                                                    variant="h5"
                                                >
                                                    ${withdrawal.amount}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.user}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.alignRight}>
                                            <CardContent>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.date}
                                                </Typography>
                                                <Grid>
                                                    {withdrawal.status === 'approved' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.green}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'declined' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.red}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'pending' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.yellow}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        )}
                        {type === 'pending' && withdrawal.status === type && (
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                    subheader={`Transaction ID: ${withdrawal.transactionId}`}
                                    action={
                                      <IconButton id={`${withdrawal.transactionId}-menu-button`} onClick={(event) => setSelectedTransactionId(withdrawal.transactionId, event)}>
                                        <MoreVertIcon />
                                      </IconButton>
                                    }
                                    />
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <CardContent>
                                                <Typography
                                                    variant="h5"
                                                >
                                                    ${withdrawal.amount}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.user}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} className={classes.alignRight}>
                                            <CardContent>
                                                <Typography
                                                    variant="caption"
                                                >
                                                    {withdrawal.date}
                                                </Typography>
                                                <Grid>
                                                    {withdrawal.status === 'approved' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.green}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'declined' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.red}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                    {withdrawal.status === 'pending' && (
                                                    <Typography
                                                        variant="caption"
                                                        className={classes.yellow}
                                                    >
                                                        {withdrawal.status}
                                                    </Typography>
                                                    )}
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item  xs={6} sm={6} md={6} className={classes.centerContent}>
                                            <CardContent>
                                                <Button variant="contained" className={classes.green} onClick={() => {handleApprove(withdrawal.transactionId); forceUpdate()}}>Approve</Button>
                                            </CardContent>
                                        </Grid>
                                        <Grid item  xs={6} sm={6} md={6} className={classes.centerContent}>
                                            <CardContent>
                                                <Button variant="contained" className={classes.red} onClick={() => {handleDecline(withdrawal.transactionId); forceUpdate()}}>Decline</Button>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        )}
                    </Fragment>)
                )}
            </Grid>
        </Wrapper>
    )

}

export default Withdrawal
