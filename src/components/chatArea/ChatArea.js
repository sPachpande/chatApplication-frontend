import React,{useEffect} from 'react';

import Box from '@mui/material/Box';
import styles from './styles/chatAreaStyles';
import MessageBox from '../messageBox/MessageBox'

import {
    List,
    ListItem,
} from "@material-ui/core";


export default function ChatArea({setToggleRefresh,messages,receiver}) {

    const classes = styles();
    return (
    <>
        <Box className={classes.chatArea}>
        <List className={classes.listRoot}>
                {
                    messages.map(message => (
                        <div key={message.id} className={classes.messageContainer}>

                            <ListItem style={{ width:"300px",height: "50px", backgroundColor:"skyblue", marginBottom:"10px"}}>      
                                <h4>{message.data}</h4>
                            </ListItem>
                        </div>
                    ))
                }
            </List>
        </Box>
        <MessageBox className={classes.MessageBox} setToggleRefresh={setToggleRefresh} receiver={receiver}/>
        </>
        
    )
}
