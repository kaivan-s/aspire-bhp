import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../assets/logo.png';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#3a4c17',
        height: 80,
      }}
      elevation={1}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 'lg',
          mx: 'auto',
        }}
      >
        {/* Logo Section */}
        <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Box component="img" src={Logo} alt="Logo" sx={{ height: '60px'}} />
        </Box>
        
        {isMobile ? (
          // Mobile View with Hamburger Menu
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop View with Navigation Links
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Typography
              variant="body1"
              onClick={handleOpenMenu}
              sx={{ cursor: 'pointer', color: 'white' }}
            >
              Services
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'services-button',
              }}
            >
              <MenuItem onClick={handleCloseMenu} component={RouterLink} to="/psychiatry">
                Psychiatry
              </MenuItem>
              <MenuItem onClick={handleCloseMenu} component={RouterLink} to="/telehealth">
                Telehealth
              </MenuItem>
            </Menu>
            <Link component={RouterLink} to="/online-forms" underline="none" sx={{ color: 'white' }}>
              <Typography variant="body1">Online Forms</Typography>
            </Link>
            <Link href="/about-us" color="inherit" underline="none" sx={{ color: 'white' }}>
              <Typography variant="body1">About</Typography>
            </Link>
          </Box>
        )}

        {/* Drawer for Mobile Menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component={RouterLink} to="/psychiatry">
                <ListItemText primary="Psychiatry" />
              </ListItem>
              <ListItem button component={RouterLink} to="/telehealth">
                <ListItemText primary="Telehealth" />
              </ListItem>
              <Divider />
              <ListItem button component={RouterLink} to="/online-forms">
                <ListItemText primary="Online Forms" />
              </ListItem>
              <ListItem button component={RouterLink} to="/about-us">
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
