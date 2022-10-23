import React, { useState,useEffect} from 'react'
import Users from '../users/Users'
import styles from './styles/chatStyles';
import ChatArea from '../chatArea/ChatArea';

import chatService from './services/chatService';


export default function Chat() {
    const [receiver, setReceiver] = useState(null);
    const [messages,setMessages] = useState([]);
    const [toggleRefresh, setToggleRefresh] = useState(false)
    
    useEffect(() => {
        chatService.fetchMessages(receiver).then(response => {
            const fetchedMessages = response.data;
            if(messages.length!=fetchedMessages.length)
                setMessages(fetchedMessages);
            });
      });

    const classes = styles();
    
    return (
        <div className={classes.app}>
            <div className={classes.users}><Users setMessages={setMessages} setReceiver={setReceiver}/> </div>
            <ChatArea setToggleRefresh={setToggleRefresh} messages={messages} receiver={receiver}/>

        </div>
    )
}
