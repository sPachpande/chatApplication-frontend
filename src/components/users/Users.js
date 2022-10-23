import React from 'react'
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

import chatService from '../chat/services/chatService';


function Users({setMessages,setReceiver}) {
    const classes = styles();
    const { users, usersLoading } = useUsers();
   
    return (
        <>
            <List className={classes.listRoot}>
                {
                    users.map(user => (
                        <div key={user.username} className={classes.usersContainer}>

                            <ListItem style={{ height: "70px", cursor: 'pointer' }}
                                onClick={() => {   
                                    setReceiver(user.id);
                                    chatService.fetchMessages(user.id).then(response => {   
                                        setMessages(response.data);
                                        setReceiver(user.id);
                                        });
                                }}>      
                                

                                <ListItemAvatar classes={{ root: classes.userIcon }} >

                                    <Avatar>{users.username }</Avatar>

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
                        </div>
                    ))
                }
            </List>
        </>
    )
}

export default Users;