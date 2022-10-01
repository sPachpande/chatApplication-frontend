import React from 'react'

import Box from '@mui/material/Box';
import styles from './styles/chatAreaStyles';
import MessageBox from '../messageBox/MessageBox'


export default function ChatArea({recepient}) {
    
    const classes = styles();
    return (
    <>
        <Box className={classes.chatArea}>
            <h4>{recepient}</h4>
        </Box>
        <MessageBox/>
        </>
        
    )
}
