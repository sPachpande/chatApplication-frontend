import React from 'react';
import Box from '@mui/material/Box'
import styles from "./styles/layoutStyles";
import RootRouter from '../router/RootRouter';

export default () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={classes.header}></div>
            <div className={classes.footer}></div>
            <Box className={classes.box}>
               <RootRouter/>
            </Box>
        </div>
    )
}; 
