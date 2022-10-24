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
        backgroundColor: "#D3D7DC",
        height: "85vh"
    },
    box: {
        position: "absolute",
        top: "60px",
        left: "70px",
        right: "70px",
        bottom: "20px",

        borderRadius: "5px",
        backgroundColor: "#ece5dd",
        minWidth:"300px"
    },
}); 