import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
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
                borderLeft:"solid grey",
                borderLeftWidth: 'thin'

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
                    <IconButton color="primary" sx={{ marginRight: '10px', color: "grey" }} onClick={viewReceiverProfile}>
                        <MoreVertIcon sx={{ fontSize: "25px" }} />
                    </IconButton>
                </div>

            ) : (
                <></>
            )}


        </Box>
    )
}
