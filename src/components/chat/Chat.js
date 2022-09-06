import React from 'react'
import Users from '../users/Users'
import styles from './styles/chatStyles';

export default function Chat() {
    const classes = styles();
    return (
        <div className={classes.app}>
            <div className={classes.users}><Users/> </div>
            <div className={classes.messages}></div>

        </div>
    )
}
