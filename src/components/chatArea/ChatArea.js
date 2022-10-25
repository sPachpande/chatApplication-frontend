import React, { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import styles from './styles/chatAreaStyles';
import MessageBox from '../messageBox/MessageBox';
import ReceiverProfile from '../receiverProfile/ReceiverProfile';
import logo from '../../images/logoWithNameGrey.png';

import {
    List,
    Card
} from "@material-ui/core";

export default function ChatArea({ setToggleRefresh, messages, receiver, receiverName }) {

    const bottomRef = useRef();
    useEffect(() => {
        bottomRef.current.scrollIntoView({ behavior: 'smooth', block: "end" });
    });
    const classes = styles();
    return (
        <>
            <ReceiverProfile className={classes.ReceiverProfile} receiver={receiver} receiverName={receiverName} />
            {receiver ? (
                <Box className={classes.chatArea}>
                    <div>
                        <List className={classes.listRoot} ref={bottomRef}>
                            {
                                messages.map(message => (
                                    <div key={message.id} className={classes.messageContainer}>
                                        <Card style={{ maxWidth: "50%", padding: "10px", backgroundColor: "#DCF8C6" }}>
                                            {message.data}
                                        </Card>
                                    </div>
                                ))
                            }
                        </List>
                    </div>
                </Box>
            ) : (
                <>
                    <Box className={classes.welcomeArea}>
                    <img src={ logo } style={{height:"400px",width:'400px',marginTop:"20%",marginLeft:"35%"}} />
                            <List  ref={bottomRef}>
                                
                            </List>

                    </Box>
                </>
            )}
            <MessageBox className={classes.MessageBox} setToggleRefresh={setToggleRefresh} receiver={receiver} />
        </>

    )
}
