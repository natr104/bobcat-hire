import React from "react";
import { Box, Link } from "@mui/material";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function LoginPage() {
  return (
    <Box sx={{ width: ["auto", 400], mx: "auto"}}>
      <Paper
        elevation={3}
        sx={{
          marginTop: '20vh',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={null} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <Button
            type="submit"
            
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign In
          </Button>
          <br />
          <Link href="/register" variant="body2">Don't have an account? Sign Up</Link>

        </Box>
      </Paper>
    </Box>
  );
}