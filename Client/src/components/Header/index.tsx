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
import Logo from '../../assets/images/logo-padol.svg'

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


const Header = () => {
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

    let img: string = user?.photoURL;

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link
                        style={{
                            textDecoration : 'none',
                            color: '#ffffff'
                        }}
                        to={ROUTES.HOME}
                    >
                        <img
                            style={{
                                width: 100
                            }}
                            src={Logo}
                            alt={'img'}
                        />
                    </Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
{/*                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>*/}
{/*                        <Menu
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
                        </Menu>*/}
                    </Box>
{/*                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {menuRoutes?.map((route : any) => (
                            <Link to={route?.route}>{route.label}</Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {!user?.uid && <>
                        <Link
                            style={{
                                textDecoration : 'none',
                                color: '#ffffff'
                            }}
                            to={ROUTES.SIGN_IN}
                        >
                            Accedi
                        </Link>

                        /

                        <Link
                            style={{
                                textDecoration : 'none',
                                color: '#ffffff'
                            }}
                            to={ROUTES.SIGN_UP}
                        >
                            Registrati
                        </Link>
                        </> }
                        { user?.uid && <>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={img} />
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
                            {userRoutes.map((route, index) => (
                                <MenuItem key={'route-' + index}>
                                    <Link  to={route.route}>{route.label}</Link>
                                </MenuItem>
                            ))}
                            <Button
                                onClick={handleLogOut}
                                sx={{color: 'black', display: 'block' }}
                            >
                                LogOut
                            </Button>
                        </Menu>
                        </> }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
