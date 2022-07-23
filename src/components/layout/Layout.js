import React from 'react';
import Box from '@mui/material/Box'
import styles from "./styles/layoutStyles";


export default () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={classes.header}></div>
            <div className={classes.footer}></div>
            <Box className={classes.box}>
               
            </Box>
        </div>
    )
}; 
