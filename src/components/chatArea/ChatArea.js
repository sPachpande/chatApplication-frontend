import React,{useEffect,useRef} from 'react';

import Box from '@mui/material/Box';
import styles from './styles/chatAreaStyles';
import MessageBox from '../messageBox/MessageBox';

import {
    List,
    Card
} from "@material-ui/core";

export default function ChatArea({setToggleRefresh,messages,receiver}) {

    const bottomRef = useRef();
    useEffect(()=>{
        bottomRef.current.scrollIntoView({behavior: 'smooth',block: "end"});
    });
    const classes = styles();
    return (
    <>
        <Box className={classes.chatArea}>
        <div>
            <List className={classes.listRoot} ref={bottomRef}>
                {
                    messages.map(message => (
                        <div key={message.id} className={classes.messageContainer}>
                            <Card style={{maxWidth:"50%",padding:"10px",backgroundColor:"#DCF8C6"}}>
                                {message.data}
                            </Card>
                        </div>
                    ))
                }
            </List>
        </div>
        </Box>
        <MessageBox className={classes.MessageBox} setToggleRefresh={setToggleRefresh} receiver={receiver}/>
        </>
        
    )
}
