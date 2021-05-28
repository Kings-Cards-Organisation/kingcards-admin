// import { Bar } from "react-chartjs-2";
import {
    //   NewsCard,
      StatCard,
      Wrapper
    } from "../../components";
    import React, { useState } from "react";
    
    import AppBar from '@material-ui/core/AppBar';
    // import Card from "@material-ui/core/Card";
    // import CardContent from "@material-ui/core/CardContent";
    // import CardHeader from "@material-ui/core/CardHeader";
    import Grid from "@material-ui/core/Grid";
    import FormControl from "@material-ui/core/FormControl"
    import InputLabel from "@material-ui/core/InputLabel"
    import MenuItem from "@material-ui/core/MenuItem"
    import Select from "@material-ui/core/Select"
    // import IconButton from "@material-ui/core/IconButton";
    // import ListItemIcon from "@material-ui/core/ListItemIcon";
    // import ListItemText from "@material-ui/core/ListItemText";
    // import LocalOfferIcon from "@material-ui/icons/LocalOffer";
    // import Menu from "@material-ui/core/Menu";
    // import MenuItem from "@material-ui/core/MenuItem";
    // import MoreIcon from "@material-ui/icons/More";
    // import MoreVertIcon from "@material-ui/icons/MoreVert";
    // import NotificationsIcon from "@material-ui/icons/Notifications";
    // import PersonIcon from '@material-ui/icons/Person';
    // import SettingsIcon from "@material-ui/icons/Settings";
    import Hidden from '@material-ui/core/Hidden';
    import IconButton from '@material-ui/core/IconButton';
    import SearchIcon from '@material-ui/icons/Search';
    import Toolbar from '@material-ui/core/Toolbar';
    import { makeStyles } from '@material-ui/core/styles';
    
    const useStyles = makeStyles(theme => ({
      appBar: {
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
      }
    }));
    
    const Trades = () => {
        const classes = useStyles();
        const [date, setDate] = useState('all')
        const [type, setType] = useState('all')
    
        const handleChangeDate = (event) => setDate(event.target.value)
        const handleChangeType = (event) => setType(event.target.value)
    
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
    
                <Toolbar className={[classes.stepDown, classes.toolBar]}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6}>
                            <StatCard
                            type="fill"
                            title="Today ($)"
                            value={0}
                            color="#51b53f" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <StatCard
                            type="fill"
                            title="Total ($)"
                            value={0}
                            color="#51b53f" />
                        </Grid>
                    </Grid>
                </Toolbar>
    
                <Toolbar className={[classes.stepDown, classes.toolBar]}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={3} md={3}>
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
    
                        <Grid item xs={6} sm={3} md={3}>
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
                                    <MenuItem value="Pending">Pending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Wrapper>
        )
    
    }
    
    export default Trades
    