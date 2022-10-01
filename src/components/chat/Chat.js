import React, { useState, useEffect } from 'react'
import Users from '../users/Users'
import styles from './styles/chatStyles';
import ChatArea from '../chatArea/ChatArea';

export default function Chat() {
    const [recepient, setRecepient] = useState(null);

    useEffect(() => {
        async function connectToRoom() {

        }
        connectToRoom();
    }, []);

    const classes = styles();
    
    return (
        <div className={classes.app}>
            <div className={classes.users}><Users setRecepient={setRecepient} /> </div>
            <ChatArea recepient={recepient} />

        </div>
    )
}
