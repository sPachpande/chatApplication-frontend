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
        bottomRef.current.scrollIntoView({ block: "end" });
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
                                    <div key={message.id}>
                                    {receiver === message.receiver.id ? (<div key={message.id} className={classes.sentMessageContainer}>
                                        <Card style={{ maxWidth: "50%", padding: "10px", backgroundColor: "#DCF8C6",borderRadius:'15px 5px 15px 10px' }}>
                                            {message.data}
                                        </Card>
                                    </div>) : (<div key={message.id} className={classes.receivedMessageContainer}>
                                        <Card style={{ maxWidth: "50%", padding: "10px", backgroundColor: "white",borderRadius:'5px 15px 10px 15px' }}>
                                            {message.data}
                                        </Card>
                                    </div>)}
                                    </div>
                                ))
                            }
                        </List>
                    </div>
                </Box>
            ) : (
                <>
                    <Box className={classes.welcomeArea}>
                    <img alt="logo" src={ logo } style={{height:"400px",width:'400px',marginTop:"25vh",marginLeft:"37vh"}} />
                            <List  ref={bottomRef}>
                                
                            </List>

                    </Box>
                </>
            )}
            <MessageBox className={classes.MessageBox} setToggleRefresh={setToggleRefresh} receiver={receiver} />
        </>

    )
}
