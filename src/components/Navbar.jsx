import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/auth';
import { isAdmin, currentUser } from '../utilities/utilities';

const pages = ['Services', 'Request Quote', 'Contact Us'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();

  const logOut = () => {
    handleCloseUserMenu();
    dispatch(logout());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* mobile links menu items here */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          {/* Large screen nav bar links here */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {currentUser() && isAdmin()? 
              <Link component={RouterLink} to='/admin' variant="body2" underline="none" sx={{ my: 2, color: 'white', display: 'block' }}>ADMIN DASHBOARD</Link> 
              : 
              <Link component={RouterLink} to='/request_quote' variant="body2" underline="none" sx={{ my: 2, color: 'white', display: 'block' }}>REQUEST QUOTE</Link>
            }
          </Box>
          {/* account menu starts here */}
          {currentUser()? 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Bobcat" variant="square" src={require("../assets/bobcat-icon-128px.png")} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link component={RouterLink} to='/profile' textAlign="center" color="inherit" underline="none">
                  <MenuItem key={'Account'} onClick={handleCloseUserMenu}>Account</MenuItem>
                </Link> 
                {!isAdmin()? (<Link component={RouterLink} to='/quotes' textAlign="center" color="inherit" underline="none">
                  <MenuItem key={'Your Quotes'} onClick={handleCloseUserMenu}>Your Quotes</MenuItem>
                </Link>) : null}
                <Link component={RouterLink} to='/login' textAlign="center" color="inherit" underline="none">
                  <MenuItem key={'Logout'} onClick={logOut}>Logout</MenuItem>
                </Link>
              </Menu>
            </Box> 
          : 
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Link component={RouterLink} to='/register' variant="body2" underline="none" sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}>REGISTER</Link> 
              <Link component={RouterLink} to='/login' variant="body2" underline="none" sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}>LOG IN</Link>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
