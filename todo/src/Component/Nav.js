import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, SvgIcon, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SettingsIcon from '@mui/icons-material/Settings';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        margin: '5px'
    },
    typo: {
        flexGrow: 1
    },
    btn1: {
        color: 'white'
    },
    btn2: {
        color: 'white'
    }
});

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  };

function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static' style={{background: '#777'}}>
                <Toolbar>
                    <Typography>UIT</Typography>
                    <Link to="/" style={{color: 'white', marginLeft: '3%'}}><HomeIcon/></Link>
                    <Link to="/todo" style={{color: 'white', marginLeft: '2%'}}><PlaylistAddIcon/></Link>
                    <Link to="/setting" style={{color: 'white', marginLeft: '2%'}}><SettingsIcon/></Link>
                    <Typography className={classes.typo}></Typography>
                    <Link to="/login" style={{color: 'white'}}>Login</Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
