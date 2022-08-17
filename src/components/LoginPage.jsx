import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Box, Link } from "@mui/material";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";
import { login } from "../actions/auth"


export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isLoggedIn } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setUsername(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
        .then(() => {
            navigate('/profile');
        })
    }
if (isLoggedIn) {
    return <Navigate to="/profile" replace={true} />;
}
return (
    <Box sx={{ width: ["auto", 400], mx: "auto" }}>
        <Paper
            elevation={3}
            sx={{
                marginTop: ["20vh", "15vh"],
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 3,
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={onChangePassword}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
                    Sign In
                </Button>
                <br />
                <Link component={RouterLink} to="/register" variant="body2">
                    Don't have an account? Sign Up!
                </Link>
            </Box>
        </Paper>
    </Box>
);
}
