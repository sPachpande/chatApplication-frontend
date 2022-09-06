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

  
function Users() {
    const classes = styles();
    const { users, usersLoading } = useUsers();
  return (  
    <>
      <List className={classes.listRoot}>
                {
                    users.map(user => (
                        <div key={user.username} className={classes.usersContainer}>
                            <ListItem style={{ cursor: 'pointer' }}>

                                <ListItemAvatar classes={{ root: classes.userIcon }} >
                                  
                                        <Avatar>{users.username}</Avatar>
                                  
                                </ListItemAvatar>
      

                                <ListItem component={"div"}
                                    onClick={() => {
                                        console.log("clicked")
                                    }}>

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
                            </ListItem>
                        </div>
                    ))
                }
            </List>
    </>
  )
}

export default Users;