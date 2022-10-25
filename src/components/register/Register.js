import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RegisterService from './services/RegisterService';
import logo from '../../images/logoWithNameGreen.png'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Registertheme = createTheme({
    palette: {
        primary: {
            main: '#148B7B',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

export default function Register({ location, history, isAuthenticated }) {

    const [alert, setAlert] = useState(false);
    const [alertMessage,setAlertMessge] = useState(null);
    const [alertSeverity,setAlertSeverity] = useState(null);

    const { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        RegisterService.register(data).then(response => {
            if (response) {
                // history.push('/login');
                setAlertSeverity("success")
                setAlertMessge("User registered successfully");
                setAlert(true);
            }
            else {
                document.getElementById("registerForm").reset();
                setAlertSeverity("error")
                setAlertMessge("User already exists");
                setAlert(true);
            }
        });

    };

    useEffect(() => {
        console.log("refreshed");
        if (isAuthenticated) {
            history.replace(from);
        }
    });
    const handleClose = () => {
        if(alertSeverity === "success")
        {
            history.push('/login');
        }
        else
            setAlert(false);
    }

    return (
        <ThemeProvider theme={Registertheme}>
            <Container maxWidth="xs" style={{ minWidth: "300px", backgroundColor: "#dededd", borderRadius: "5px" }}>

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: "5px",

                    }}>

                    <img src={logo} style={{ height: "200px", width: '200px' }} />

                    <Typography variant="h5">
                        Register
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} id="registerForm">
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            data-testid='username-input'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            data-testid='password-input'
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            data-testid='login-button'
                        >
                            Register
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="/" variant="body2">
                                    go back
                                </Link>
                            </Grid>

                        </Grid>

                    </Box>
                </Box>

            </Container>
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose} sx={{ height: "60%", width: 445 }} anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}>
                <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
                   {alertMessage}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}