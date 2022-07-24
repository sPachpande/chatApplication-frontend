import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserContext } from '../context/UserContext'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

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

export default function Login() {

  const {setUser} = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = (event) => {
     event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
    setUser({
      username: data.get('username'),
      password: data.get('password'),
    });
    history.push("/");
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

          <Avatar sx={{ m: 2, bgcolor: 'primary.main' }} data-testid="chat-icon">
            <WhatsAppIcon />
          </Avatar>

          <Typography variant="h5">
            SIGN IN
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
                <Link href="#" variant="body2">
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