import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container: {
        alignContent: "center",
        position: "relative",
        backgroundColor: "red"
    },
    header: {
        backgroundColor: "#128C7E",
        height: "15vh"
    },
    footer:{
        backgroundColor: "#dededd",
        height: "85vh"
    },
    box: {
        position: "absolute",
        top: "60px",
        left: "40px",
        right: "40px",
        bottom: "20px",

        borderRadius: "5px",
        backgroundColor: "white"
    },
}); 