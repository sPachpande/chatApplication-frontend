import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/loginStyles"

export default (onLogin) => {
    const classes = styles();
    const [showError, setShowError] = useState(false);

    const errorMessage = () => {
        if (showError) {
            return (
                <Typography variant="body1" color="error" className={classes.loginErrorMessage}>
                    Login failed
                </Typography>
            )
        }
    };

    const handleLogin = async (data) => {
        const username = data.get('username');
        const password = data.get('password');
        try {
            await onLogin(username, password);
            setShowError(false);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setShowError(true);
            } else {
                throw err;
            }
        }
    };

    return {
        errorMessage: errorMessage,
        handleLogin: handleLogin
    };
};
