import { makeStyles } from "@material-ui/core";

export default makeStyles({
    app: {
        width: '100%'
    },
    users: {
        float: 'left',
        width: '30%',
        backgroundColor: 'grey',
        position: 'absolute',
        borderRadius: "5px"
},
    messages: {
        float: 'right',
        backgroundColor: 'lightblue',
        height: '890px',
        width: '70%',
        position: 'relative',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px'
}
}); 