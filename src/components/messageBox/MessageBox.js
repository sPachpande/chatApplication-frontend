import React from 'react';
import { useState} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import chatService from '../chat/services/chatService';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';


const Logintheme = createTheme({
    palette: {
    //   primary: {
    //     main: '#148B7B',
    //   },
    //   secondary: {
    //     main: '#f44336',
    //   },
    },
  });
export default function MessageBox({setToggleRefresh,receiver}) {
    
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        setMessage('')
        chatService.sendMessage(receiver,message).then(response => {

            setToggleRefresh(prevState => !prevState)
        });  
    };

    return (
        <ThemeProvider theme={Logintheme}>
        <Box
            sx={{
                backgroundColor:"#F2F4F3",
                width: '70%',
                display: 'flex',
                marginLeft: '30%',
                alignItems: 'center',
                borderBottomRightRadius: '5px',
                top:"90px",
                bottom: "30px",
            }}>

            <IconButton color="primary" sx={{ marginLeft: '5px',color:"grey" }}>
                <InsertEmoticonIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton color="primary" sx={{ marginLeft: '0px',color:"grey" }}>
                <AttachFileIcon sx={{ fontSize: "30px" }} />
            </IconButton>

            <TextField
                required
                size="small"
                sx={{ width: '100%', marginLeft: '20px', marginRight: '10px',backgroundColor:"white",margin:"10px",'&:focus': {
                    outline:0,
                    border:0,
                }}}
                id="message"
                placeholder='Type a message'
                data-testid='message-input'
                onChange={(e)=>{setMessage(e.target.value)}}
                value={message}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        sendMessage();
                        e.preventDefault();
                    }
                  }}
            />

            <IconButton color="primary" sx={{ marginRight: '10px',color:"grey" }} onClick={sendMessage}>
                <SendIcon sx={{ fontSize: "40px" }} />
            </IconButton>

        </Box>
    </ThemeProvider>
    )
}
