import {useState} from "react";


export default (onLogin) => {
    const [showError, setShowError] = useState(false);

    var getShowError= ()=>{
        return showError;
    }

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
        getShowError: getShowError,
        setShowError: setShowError,
        handleLogin: handleLogin
    };
};
