import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import {Avatar} from '@material-ui/core';

import { faker } from '@faker-js/faker';

export default function SenderProfile({ senderName }) {

    const viewSenderProfile = () => {

    };
    const handleLogout = () =>{
        localStorage.clear('chatApp_Id');
        localStorage.clear('chatApp_username');
        localStorage.clear('chatApp_token');
        window.location.reload();
    };
    return (
        <Box
            sx={{
                backgroundColor: "#F2F4F3",
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTopLeftRadius: '5px'
            }}>
            <div>
                <span><IconButton color="primary" sx={{ marginLeft:"12px",color: "grey" }}>
                    <Avatar src={faker.image.avatar()}/>
                </IconButton></span>
                <span style={{marginLeft:"13px"}}>{senderName}</span>
            </div>
            <div>
                <span><IconButton color="primary" sx={{ marginRight: '10px', color: "red"}} onClick={handleLogout}>
                    <LogoutIcon sx={{ fontSize: "25px" }}/>
                </IconButton></span>
            </div>

        </Box>
    )
}
