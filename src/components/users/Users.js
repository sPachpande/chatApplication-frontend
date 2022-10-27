import React, { useEffect, useState } from 'react'
import useUsers from './hooks/useUsers';
import styles from './styles/userStyles'
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import { faker } from '@faker-js/faker';
import SenderProfile from '../senderProfile/SenderProfile'
import chatService from '../chat/services/chatService';


function Users({ setMessages, setReceiver, setReceiverName, socket, notifications, setNotifications, receiver }) {
    const classes = styles();
    const { users, usersLoading } = useUsers();
    const [senderName, setSenderName] = useState(null);
    const [senderId, setSenderId] = useState(null);


    const handleNotification = (notification) => {
        setNotifications(prevNotifications => [...prevNotifications, notification.senderId]);

    }
    useEffect(() => {
        setSenderName(localStorage.getItem('chatApp_username'));
        setSenderId(localStorage.getItem('chatApp_Id'));
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on("get_notification", handleNotification)
        }
    }, [socket]);


    const countOccurrences = (val) => {
        var count = 0;

        for (var i = 0; i < notifications.length; i++) {
            if (notifications[i] === val)
                count++;
        }

        if (receiver && val && receiver.toString().valueOf() === val.valueOf()) {
            count = 0;
        }

        return count;
    };

    const removeOccurrences = (val) => {
        const updatedNotifications = notifications.filter(i => i !== val);
        setNotifications(updatedNotifications);
    };



    faker.seed(23);
    return (
        <div className={classes.users}>
            <SenderProfile senderName={senderName} />
            <List className={classes.listRoot}>
                {
                    users.map(user => (
                        <div key={user.id} className={classes.usersContainer}>
                            {user.id.toString() === senderId.toString() ? (<></>) :
                                (< div style={{display:"flex",justifyContent:"space-between"}}>
                                    <ListItem style={{ height: "70px", cursor: 'pointer' }}

                                        onClick={() => {
                                            chatService.fetchMessages(user.id).then(response => {

                                                setReceiver(user.id);
                                                setReceiverName(user.username);
                                                setMessages(response.data);

                                                removeOccurrences(user.id.toString());
                                            })

                                        }}>


                                        <ListItemAvatar classes={{ root: classes.userIcon }} >

                                            <Avatar src={faker.image.avatar()} style={{ height: '50px', width: "50px" }} />

                                        </ListItemAvatar>


                                        <ListItemText style={{width:"340px"}}className={classes.itemText} primary={user.username} secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    text-align="right"
                                                    color="textSecondary"
                                                >
                                                    {/* {countOccurrences(user.id.toString())} */}
                                                    {faker.phone.number('+91 #########')}


                                                </Typography>
                                            </>
                                        } />
                                       { countOccurrences(user.id.toString()) === 0 ? (<></>) :(<><ListItemText
                                            style={{
                                                background: "#25D366",
                                                borderRadius: "0.8em",
                                                color: "#ffffff",
                                                textAlign: "center"
                                            }} primary={countOccurrences(user.id.toString())} /></>)}

                                    </ListItem>
                                </div>)}
                        </div>
                    ))
                }
            </List>
        </div>
    )
}

export default Users;