import React from 'react';
import Box from '@mui/material/Box'
import styles from "./styles/layoutStyles";
import RootRouter from '../router/RootRouter';
import useAuth from './hooks/useAuth';

export default () => {
    const classes = styles();
    const { isAuthenticated, handleLogin, handleLogout } = useAuth();
    return (
        <div className={classes.container}>
            <div className={classes.header}></div>
            <div className={classes.footer}></div>
            <Box className={classes.box}>
                <RootRouter isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} />
            </Box>
        </div>
    )
}; 
