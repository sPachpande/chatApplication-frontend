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


function Users({ setMessages, setReceiver, setReceiverName }) {
    const classes = styles();
    const { users, usersLoading } = useUsers();
    const [senderName, setSenderName] = useState(null);
    const [senderId, setSenderId] = useState(null);
    useEffect(() => {
        setSenderName(localStorage.getItem('chatApp_username'));
        setSenderId(localStorage.getItem('chatApp_Id'));
    }, []);

    faker.seed(23);
    return (
        <div className={classes.users}>
            <SenderProfile senderName={senderName}/>
            <List className={classes.listRoot}>
                {
                    users.map(user => (
                        <div key={user.id} className={classes.usersContainer}>
                            {user.id.toString() === senderId.toString() ? (<></>) :
                                (<>
                                    <ListItem style={{ height: "70px", cursor: 'pointer' }}
                                        onClick={() => {
                                            chatService.fetchMessages(user.id).then(response => {
                                                setReceiver(user.id);
                                                setReceiverName(user.username);
                                                setMessages(response.data);
                                            });
                                        }}>


                                        <ListItemAvatar classes={{ root: classes.userIcon }} >

                                            <Avatar src={faker.image.avatar()} style={{ height: '50px', width: "50px" }} />

                                        </ListItemAvatar>


                                        <ListItemText className={classes.itemText} primary={user.username} secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    Latest message
                                                </Typography>
                                            </>
                                        } />

                                    </ListItem>
                                </>)}
                        </div>
                    ))
                }
            </List>
        </div>
    )
}

export default Users;