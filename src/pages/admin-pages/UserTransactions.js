import React, { Fragment, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StatCard, Wrapper } from "../../components";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoreIcon from "@material-ui/icons/More";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';

import {
    dailySignups,
    dailyTrades,
    dailyWithdrawals
} from "../../server/admin-charts/demoCharts";

import users from "../../server/demo-user-data/demoUsers"
import { Bar } from "react-chartjs-2";
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import { StarSharp } from "@material-ui/icons";


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

const UserTransactions = () => {
    const classes = useStyles();
    const [chartAnchorEl, setChartAnchorEl] = useState(null)
    const [userAnchorEl, setUserAnchorEl] = useState(null)
    const [userId, setUserId] = useState('')
    const [userStatus, setUserStatus] = useState('all')

    const handleOpenChartMenu = (event) => setChartAnchorEl(event.currentTarget);
    const handleCloseChartMenu = () => setChartAnchorEl(null);
    const handleOpenUserMenu = (event) => setUserAnchorEl(event.currentTarget);
    const handleCloseUserMenu = () => setUserAnchorEl(null)
    const handleSetUserId = (userId) => setUserId(userId)
    const handleSetUserStatus = (event) => setUserStatus(event.target.value)

    const setSelectedUserId = (userId, event) => {
        handleSetUserId(userId)
        handleOpenUserMenu(event)
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

    const userMenu = (
        <Menu
            id="transaction-item-menu"
            anchorEl={userAnchorEl}
            open={Boolean(userAnchorEl)}
            onClose={handleCloseUserMenu}
        >
            <Link to={`/admin/withdrawals/${userId}`}>
                <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="View User" />
                </MenuItem>
            </Link>
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
                                        placeholder="Enter Username / User ID"
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
                    <Grid item xs={12} sm={4} md={4}>
                        <StatCard
                        type="fill"
                        title="Total Users ($)"
                        value={0}
                        color="#51b53f" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <StatCard
                        type="fill"
                        title="Total Trades ($)"
                        value={0}
                        color="#3f51b5" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <StatCard
                        type="fill"
                        title="Total Withdrawals ($)"
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
                        subheader={dailyTrades.title}
                        action={
                            <IconButton id={`trade-chart-menu-button`} onClick={handleOpenChartMenu}>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        />
                        <CardContent>
                        <Bar
                            data={dailyTrades.data}
                            height={dailyTrades.height}
                            options={dailyTrades.options}
                        />
                        </CardContent>
                    </Card>
                </Grid>

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
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}></Grid>
                <Grid item xs={12} sm={12} md={12}></Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <StatCard
                        type="fill"
                        title="Signups Today"
                        value={0}
                        color="#51b53f" />
                    </Grid>
                    <br/>
                    <Grid item xs={12} sm={12} md={12}>
                        <StatCard
                        type="fill"
                        title="Active Users"
                        value={0}
                        color="#3f51b5" />
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={8} md={8}>
                    <Card>
                        <CardHeader
                        subheader={dailySignups.title}
                        action={
                            <IconButton id={`signup-chart-menu-button`} onClick={handleOpenChartMenu}>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        />
                        <CardContent>
                            <Bar
                            data={dailySignups.data}
                            height={dailySignups.height}
                            options={dailySignups.options}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2} className={classes.stepDown}>
                <Grid item xs={6} sm={3} md={2} className={classes.centerContent}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                        labelId="date-select-outlined-label"
                        id="date-select-outlined"
                        value={userStatus}
                        onChange={handleSetUserStatus}
                        label="User Status"
                        >
                            <MenuItem value="all">
                                <em>All Users</em>
                            </MenuItem>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="new">New Users</MenuItem>
                            <MenuItem value="offline"> Offline</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            {userMenu}

            <Grid container spacing={1} className={classes.stepDown}>
                {users.map((user, index) => 
                    (<Fragment key={index}>
                        {userStatus === 'all' && 
                            (<Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                    subheader={user.id}
                                    action={
                                        <IconButton id={`user-${user.id}-menu-button`} onClick={(event) => setSelectedUserId(user.id, event)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    />
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Typography
                                                variant='h5'
                                                >
                                                    {user.name}
                                                </Typography>
                                                <Typography
                                                variant='caption'
                                                >
                                                    Balance: ${user.balance}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Trades: {user.transactions.filter((transaction) => { return transaction.transactionType === 'trade' }).length}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Withdrawals: {user.transactions.filter((transaction) => { return transaction.transactionType === 'withdrawal' }).length}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                {user.isOnline && 
                                                    (<Typography
                                                    variant='caption'
                                                    >
                                                        Status: {(
                                                            <Typography
                                                            variant='caption'
                                                            className={classes.green}
                                                            >
                                                                Active
                                                            </Typography>
                                                        )}
                                                    </Typography>)
                                                }
                                                {!user.isOnline && 
                                                    (<Typography
                                                    variant='caption'
                                                    >
                                                        Status: {(
                                                            <Typography
                                                            variant='caption'
                                                            className={classes.yellow}
                                                            >
                                                                Offline
                                                            </Typography>
                                                        )}
                                                    </Typography>)
                                                }
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                {user.isNewUser && 
                                                    (<Fragment>
                                                        <MenuItem>
                                                            <ListItemIcon>
                                                                <StarSharp color="primary" />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            variant='h6'
                                                            >
                                                                New User
                                                            </ListItemText>
                                                        </MenuItem>
                                                    </Fragment>)
                                                }
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>)
                        }
                        {userStatus === 'active' && user.isOnline &&
                            (<Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                    subheader={user.id}
                                    action={
                                        <IconButton id={`user-${user.id}-menu-button`} onClick={(event) => setSelectedUserId(user.id, event)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    />
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Typography
                                                variant='h5'
                                                >
                                                    {user.name}
                                                </Typography>
                                                <Typography
                                                variant='caption'
                                                >
                                                    Balance: ${user.balance}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Trades: {user.transactions.filter((transaction) => { return transaction.transactionType === 'trade' }).length}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Withdrawals: {user.transactions.filter((transaction) => { return transaction.transactionType === 'withdrawal' }).length}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>)
                        }
                        {userStatus === 'new' && user.isNewUser &&
                            (<Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                    subheader={user.id}
                                    action={
                                        <IconButton id={`user-${user.id}-menu-button`} onClick={(event) => setSelectedUserId(user.id, event)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    />
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Typography
                                                variant='h5'
                                                >
                                                    {user.name}
                                                </Typography>
                                                <Typography
                                                variant='caption'
                                                >
                                                    Balance: ${user.balance}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Trades: {user.transactions.filter((transaction) => { return transaction.transactionType === 'trade' }).length}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Withdrawals: {user.transactions.filter((transaction) => { return transaction.transactionType === 'withdrawal' }).length}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>)
                        }
                        {userStatus === 'offline' && !user.isOnline &&
                            (<Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardHeader
                                    subheader={user.id}
                                    action={
                                        <IconButton id={`user-${user.id}-menu-button`} onClick={(event) => setSelectedUserId(user.id, event)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    />
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Typography
                                                variant='h5'
                                                >
                                                    {user.name}
                                                </Typography>
                                                <Typography
                                                variant='caption'
                                                >
                                                    Balance: ${user.balance}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Trades: {user.transactions.filter((transaction) => { return transaction.transactionType === 'trade' }).length}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Typography
                                                    variant='caption'
                                                    >
                                                        Withdrawals: {user.transactions.filter((transaction) => { return transaction.transactionType === 'withdrawal' }).length}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>)
                        }
                    </Fragment>)
                )}
            </Grid>
        </Wrapper>
    )
}

export default UserTransactions
