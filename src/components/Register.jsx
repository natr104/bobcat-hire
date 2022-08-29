import { Box, Paper, TextField, Button, Link, Typography } from '@mui/material'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/auth';
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message)
    const { isLoggedIn } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    }
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    const onChangePasswordConfirmation = (e) => {
        const passwordConfirmation = e.target.value;
        setPasswordConfirmation(passwordConfirmation);
    }
    const onChangePhoneNo = (e) => {
        const phoneNo = e.target.value;
        setPhoneNo(phoneNo);
    }
    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        dispatch(register(email, name, password, passwordConfirmation, phoneNo, address))
            .then(() => {
                setSuccessful(true);
                navigate('/')
            })
            .catch(() => {
                setSuccessful(false);
            });

    };
    if (isLoggedIn) {
        return <Navigate to="/profile" replace={true} />;
    }
    return (
        <Box sx={{ width: ["auto", 500], mx: "auto" }}>
            <Paper
                elevation={3}
                sx={{
                    marginTop: "5vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                }}
            >
            <Typography component="h1" variant="h5">
                Register
            </Typography>
                <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onChangeEmail}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        onChange={onChangeName}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        onChange={onChangeAddress}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="phone-no"
                        label="Phone Number"
                        name="phone-no"
                        autoComplete="phone"
                        onChange={onChangePhoneNo}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="set-password"
                        onChange={onChangePassword}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password-confirmation"
                        label="Confirm Password"
                        type="password"
                        id="password-confirmation"
                        autoComplete="confirm-password"
                        onChange={onChangePasswordConfirmation}
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
                        Register
                    </Button>
                    <br />
                    <Link component={RouterLink} to="/login" variant="body2">
                        Already have an account? Sign In!
                    </Link>
                </Box>
            </Paper>
        </Box>
    );
}