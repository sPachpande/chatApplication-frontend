import { makeStyles } from "@material-ui/core";
import chatBackground from '../../../images/chatBackground.jpeg'

export default makeStyles({

    chatArea: {
        float: 'right',
        width: '70%',
        height:"80.5vh",
        overflow:'scroll',
        backgroundImage: `url(${chatBackground})`,
    },
    welcomeArea: {
        float: 'right',
        width: '70%',
        height:"92vh",
        overflow:'scroll',
        backgroundImage: `url(${chatBackground})`,
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px'
    },
    sentMessageContainer: { 
        marginBottom:"10px",
        wordWrap: 'break-word',
        display:"flex",
        justifyContent:"right",
        marginLeft:"5%",
        marginRight:"5%"
    },
    receivedMessageContainer: { 
        marginBottom:"10px",
        wordWrap: 'break-word',
        display:"flex",
        justifyContent:"left",
        marginLeft:"5%",
        marginRight:"5%"
    }
});     