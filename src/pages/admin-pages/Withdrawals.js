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

import AppBar from '@material-ui/core/AppBar';
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
    right: '0',
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
  },
  blueBackground: {
    backgroundColor: '#3f51b5'
  }
}));

const Withdrawal = ({ history }) => {
    const classes = useStyles();
    const [date, setDate] = useState('all')
    const [type, setType] = useState('all')
    const [transactionAnchorEl, setTransactionAnchorEl] = useState(null)
    const [chartAnchorEl, setChartAnchorEl] = useState(null)
    const [transactionId, setTransactionId] = useState('')


    const demoWithdrawals = [
        {
            transactionId: '2848099365',
            amount: '300',
            date: '7th may 2021',
            user: 'Mark Zuck',
            status: 'pending'
        },
        {
            transactionId: '8091753439',
            amount: '2300',
            date: '7th may 2021',
            user: 'Jason Bourne',
            status: 'pending'
        },
        {
            transactionId: '2937898436',
            amount: '200',
            date: '6th may 2021',
            user: 'Mark Zuck',
            status: 'declined'
        },
        {
            transactionId: '5988276739',
            amount: '400',
            date: '4th may 2021',
            user: 'Mark Zuck',
            status: 'approved'
        },
        {
            transactionId: '0993524168',
            amount: '100',
            date: '5th may 2021',
            user: 'Jim Reeves',
            status: 'declined'
        },
        {
            transactionId: '4854568997',
            amount: '1200',
            date: '6th may 2021',
            user: 'Dow Jones',
            status: 'approved'
        },
        {
            transactionId: '2657430664',
            amount: '700',
            date: '7th may 2021',
            user: 'Amy Schulz',
            status: 'pending'
        }
    ]

    const handleChangeDate = (event) => setDate(event.target.value)
    const handleChangeType = (event) => setType(event.target.value)
    const handleOpenChartMenu = event => setChartAnchorEl(event.currentTarget);
    const handleCloseChartMenu = () => setChartAnchorEl(null);
    const handleOpenTransactionMenu = event => setTransactionAnchorEl(event.currentTarget);
    const handleCloseTransactionMenu = () => setTransactionAnchorEl(null)
    const handleSetTransactionId = (transactionId) => setTransactionId(transactionId)
    
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
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Grid container spacing={1}>
                        <Hidden xsDown>
                            <div className={classes.searchWrapper}></div>
                        </Hidden>
                        <Hidden xsDown>
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
                        <Hidden xsDown>
                            <div className={classes.searchWrapper}></div>
                        </Hidden>
                    </Grid>
                </Toolbar>
            </AppBar>

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

                <Grid item xs={6} sm={3} md={2}>
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

                <Grid item xs={6} sm={3} md={2}>
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
                                        <Grid item xs={12} sm={6} md={6}>
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
                                        <Grid item xs={12} sm={6} md={6} className={classes.alignRight}>
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
                                        <Grid item xs={12} sm={6} md={6}>
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
                                        <Grid item xs={12} sm={6} md={6} className={classes.alignRight}>
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
                                        <Grid item xs={12} sm={6} md={6}>
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
                                        <Grid item xs={12} sm={6} md={6} className={classes.alignRight}>
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
                                        <Grid item xs={12} sm={6} md={6}>
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
                                        <Grid item xs={12} sm={6} md={6} className={classes.alignRight}>
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
                    </Fragment>)
                )}
            </Grid>
        </Wrapper>
    )

}

export default Withdrawal
