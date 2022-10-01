import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>
    ({
    usersContainer: {
        "& :hover": {
            backgroundColor: "lightyellow",
        }
    },
    userIcon: {
        "& :hover": {
            backgroundColor: "red",
        }
    },

    itemText:{

    },

    listRoot: {
        width: '100%',
        backgroundColor: 'pink',
        borderTopLeftRadius: '5px',
    },
    
})
);