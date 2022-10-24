import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import chatService from '../chat/services/chatService';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function ReceiverProfile({ receiver, receiverName }) {

    const viewReceiverProfile = () => {

    };

    return (
        <Box
            sx={{
                backgroundColor: "#F2F4F3",
                width: '70%',
                display: 'flex',
                marginLeft: '30%',
                alignItems: 'center',
                borderTopRightRadius: '5px',
                top: "90px",
                bottom: "30px",
            }}>
            {receiver ? (
                < div style={{width:'100%',display: "flex",alignItems:"center",justifyContent:'space-between'}}>
                    <div>
                    <span><IconButton color="primary" sx={{ marginLeft: '5px', color: "grey" }}>
                        <AccountCircleIcon sx={{ fontSize: "40px" }} />
                        {/* <Avatar src={faker.image.avatar()}/> */}
                    </IconButton></span>
                    <span>{receiverName}</span>
                    </div>
                    <IconButton color="primary" sx={{ right:'10px',marginRight: '10px', color: "grey" }} onClick={viewReceiverProfile}>
                        <MoreVertIcon sx={{ fontSize: "25px" }} />
                    </IconButton>
                </div>

            ) : (
                <></>
            )}


        </Box>
    )
}
