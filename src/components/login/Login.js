import React,{useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../images/logoWithNameGreen.png'
import useLogin from './hooks/useLogin';

const Logintheme = createTheme({
  palette: {
    primary: {
      main: '#148B7B',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default function Login({ location, history, isAuthenticated, onLogin }) {

  const { from } = location.state || { from: { pathname: "/" } };
  const { handleLogin } = useLogin(onLogin);

  useEffect(() => {
    if (isAuthenticated) {
      history.replace(from);
    }
  });

  const handleSubmit = (event) => {
     event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleLogin(data);
  };

  return (
    <ThemeProvider theme={Logintheme}>
      <Container maxWidth="xs" style={{ minWidth: "300px", backgroundColor: "#dededd", borderRadius: "5px" }}>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: "5px",

          }}>

          
          <img src={ logo } style={{height:"200px",width:'200px'}} />

          <Typography variant="h5">
            Log In
          </Typography>

          <Box component="form" onSubmit={handleSubmit} >
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
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}