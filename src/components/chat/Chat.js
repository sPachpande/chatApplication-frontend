import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Chat(msg) {
    const message = useContext(UserContext);
    return (
        <div>{message}</div>
    )
}
