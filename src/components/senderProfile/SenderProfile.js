import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import {Avatar} from '@material-ui/core';

import { faker } from '@faker-js/faker';

export default function SenderProfile({ senderName }) {

    const viewSenderProfile = () => {

    };
    return (
        <Box
            sx={{
                backgroundColor: "#F2F4F3",
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <div>
                <span><IconButton color="primary" sx={{ marginLeft:"12px",color: "grey" }}>
                    {/* <AccountCircleIcon sx={{ fontSize: "40px" }} /> */}
                    <Avatar src={faker.image.avatar()}/>
                </IconButton></span>
                <span style={{marginLeft:"13px"}}>{senderName}</span>
            </div>
            <div>
                <span><IconButton color="primary" sx={{ marginRight: '10px', color: "grey"}} onClick={viewSenderProfile}>
                    <LogoutIcon sx={{ fontSize: "25px" }} />
                </IconButton></span>
            </div>

        </Box>
    )
}
