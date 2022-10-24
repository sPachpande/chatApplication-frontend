import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>
    ({
    usersContainer: {
        "& :hover": {
            backgroundColor: "#f2f4f3",
        }
    },

    itemText:{
        marginLeft:"10px"
    },

    listRoot: {
        width: '100%',
        backgroundColor: '#ece5dd',
        // backgroundColor: 'white',
        height:"92vh",
        overflow: "scroll"
    },

    
})
);