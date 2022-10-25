import React from 'react';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import chatService from '../chat/services/chatService';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';


export default function MessageBox({ setToggleRefresh, receiver }) {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        setMessage('')
        chatService.sendMessage(receiver, message).then(response => {

            setToggleRefresh(prevState => !prevState)
        });
    };

    return (
        <>
        {receiver ? (
        <Box
            sx={{
                backgroundColor: "#F2F4F3",
                width: '70%',
                display: 'flex',
                marginLeft: '30%',
                alignItems: 'center',
                borderBottomRightRadius: '5px',
                top: "90px",
                bottom: "30px",
            }}>

            <IconButton color="primary" sx={{ marginLeft: '5px', color: "grey" }}>
                <InsertEmoticonIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton color="primary" sx={{ marginLeft: '0px', color: "grey" }}>
                <AttachFileIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <div style={{ margin: "10px", width: "100%", borderRadius: "20px", backgroundColor: "white" }}>
                <InputBase
                    required
                    size="small"
                    sx={{ width: '96%', marginLeft: '20px', marginRight: '10px', marginTop: "5px", marginBottom: "5px", marginLeft: "20px", marginRight: "20px" }}
                    id="message"
                    placeholder='Type a message'
                    data-testid='message-input'
                    onChange={(e) => { setMessage(e.target.value) }}
                    value={message}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            sendMessage();
                            e.preventDefault();
                        }
                    }}
                />
            </div>

            <IconButton color="primary" sx={{ marginRight: '10px', color: "grey" }} onClick={sendMessage}>
                <SendIcon sx={{ fontSize: "40px" }} />
            </IconButton>

        </Box>
        ) : (
            <></>
        )}</>
    )
}
