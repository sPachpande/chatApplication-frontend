import React, { useContext,useState,useEffect}from 'react'
import { UserContext } from '../context/UserContext'

export default function Chat() {

    const {user} = useContext(UserContext);
    const showProfile=()=>{
        console.log(user);
    }
    return (
        <div>
            App
            <pre>{JSON.stringify(user)}</pre>
            <button onClick={()=>{showProfile()}}>Profile</button>
        </div>
    )
}
