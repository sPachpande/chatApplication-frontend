import React, { useState,useEffect} from 'react'
import Users from '../users/Users'
import styles from './styles/chatStyles';
import ChatArea from '../chatArea/ChatArea';
import socketClient from "socket.io-client";
import chatService from './services/chatService';


export default function Chat() {
    const [receiver, setReceiver] = useState(null);
    const [messages,setMessages] = useState([]);
    const [toggleRefresh, setToggleRefresh] = useState(false)
    const [receiverName, setReceiverName] = useState(null);
    const [socket, setSocket] = useState(null);
    const [notification,setNotification]  = useState(false);
    const [notificationSender,setNotificationSender] = useState(null);

    useEffect(() => {
        if(receiver){
        chatService.fetchMessages(receiver).then(response => {
            const fetchedMessages = response.data;
            if(messages.length!==fetchedMessages.length)
                setMessages(fetchedMessages);
            });
      }});

      useEffect(() => {
        const newSocket = socketClient("http://localhost:8085/", { 
          query: {
            "room": localStorage.getItem('chatApp_Id')    //listining 
          }
        }); 
        if(newSocket!=null)
        {
            setSocket(newSocket);
        }
        
      },[]);

      const handleNotification = (notification)=>{
        setToggleRefresh(prevState => !prevState)
        setNotification(true);
        setNotificationSender(notification.senderId);
       
    }
      useEffect(()=>{  
        if(socket)
        {
            socket.on("get_notification",handleNotification)
        }
    },[socket]);

    const classes = styles();
    
    return (
        <div className={classes.app}>
            <div className={classes.users}><Users setMessages={setMessages} setReceiver={setReceiver} setReceiverName={setReceiverName} socket={socket}/> </div>
            <ChatArea setToggleRefresh={setToggleRefresh} messages={messages} receiver={receiver} receiverName={receiverName} socket={socket}/>

        </div>
    )
}
