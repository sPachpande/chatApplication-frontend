import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container: {
        alignContent: "center",
        position: "relative",
        backgroundColor: "red"
    },
    header: {
        backgroundColor: "#148B7B",
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
        backgroundColor: "white",
        minWidth:"300px"
    },
}); 