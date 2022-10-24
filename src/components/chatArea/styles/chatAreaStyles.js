import { makeStyles } from "@material-ui/core";
import chatBackground from '../../../images/chatBackground.jpeg'

export default makeStyles({

    chatArea: {
        float: 'right',
        width: '70%',
        height:"80.5vh",
        borderTopRightRadius: '5px',
        overflow:'scroll',
        backgroundImage: `url(${chatBackground})`,
    },
    messageContainer: { 
        marginBottom:"10px",
        wordWrap: 'break-word',
        display:"flex",
        justifyContent:"right",
        marginLeft:"5%",
        marginRight:"5%"
    }
});     