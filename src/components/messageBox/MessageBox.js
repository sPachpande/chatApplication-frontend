import React from 'react';
import { useState} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

import chatService from '../chat/services/chatService';


export default function MessageBox({setToggleRefresh,receiver}) {
    
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        setMessage('')
        chatService.sendMessage(receiver,message).then(response => {

            setToggleRefresh(prevState => !prevState)
        });  
    };

    return (
        <Box
            sx={{
                width: '70%',
                display: 'flex',
                marginLeft: '30%',
                alignItems: 'center',
                borderBottomRightRadius: '5px',
                top:"90px",
                bottom: "30px"
            }}>
            <TextField
                margin="normal"
                required    
                sx={{ width: '100%', marginLeft: '20px', marginRight: '10px' }}
                id="message"
                placeholder='Say Hi to your friend !!!'
                autoFocus
                data-testid='message-input'
                onChange={(e)=>{setMessage(e.target.value)}}
                value={message}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        sendMessage();
                        e.preventDefault();
                    }
                  }}
            />

            <IconButton color="primary" sx={{ marginRight: '10px' }} onClick={sendMessage}>
                <SendIcon sx={{ fontSize: "50px" }} />
            </IconButton>

        </Box>

    )
}
