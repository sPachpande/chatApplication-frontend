import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';


export default function MessageBox() {

    return (
        <Box
            sx={{
                backgroundColor: 'lightYellow',
                width: '70%',
                display: 'flex',
                marginLeft: '30%',
                alignItems: 'center',
                borderBottomRightRadius: '5px'
            }}>
            <TextField
                margin="normal"
                required
                sx={{ width: '100%', marginLeft: '20px', marginRight: '10px' }}
                id="message"
                placeholder='Say Hi to your friend !!!'
                autoComplete="Message"
                autoFocus
                data-testid='message-input'
            />

            <IconButton color="primary" sx={{ marginRight: '10px' }}>
                <SendIcon sx={{ fontSize: "50px" }} />
            </IconButton>

        </Box>

    )
}
