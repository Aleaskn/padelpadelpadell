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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { useUserAuth } from '../context/UseAuthContext';

const menuRoutes : any  = [
  // { route: ROUTES.SIGN_IN, label : 'Sign In' },
  // { route: ROUTES.LANDING, label : 'Landing' },
  // { route: ROUTES.HOME, label : 'Home' },
]

const userRoutes = [
  { route: ROUTES.ACCOUNT, label : 'Account' },
  { route: ROUTES.ADMIN, label : 'Admin' },
]

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
  let { user, logOut } = useUserAuth();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = async () => {
    try{
      await logOut();
    } catch(err : any) {
      console.log(err.message)

    }

  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuRoutes?.map((route : any) => (
              <Link to={route?.route}>{route.label}</Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {userRoutes.map((route) => (
                <MenuItem>
                  <Link to={route.route}>{route.label}</Link>
                </MenuItem>
              ))}
              <Button
                onClick={handleLogOut}
                sx={{color: 'black', display: 'block' }}
              >
                LogOut
              </Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;

// import React from 'react'

// import { Link } from 'react-router-dom';

// import * as ROUTES from '../../constants/routes';

// const Navigation = ({

// }) => {
// 	return (
// 		<div>
//       <ul>
//         <li>
//           <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//         </li>
//         <li>
//           <Link to={ROUTES.LANDING}>Landing</Link>
//         </li>
//         <li>
//           <Link to={ROUTES.HOME}>Home</Link>
//         </li>
//         <li>
//           <Link to={ROUTES.ACCOUNT}>Account</Link>
//         </li>
//         <li>
//           <Link to={ROUTES.ADMIN}>Admin</Link>
//         </li>
//       </ul>
//   </div>
// 	)}

	// export default Navigation