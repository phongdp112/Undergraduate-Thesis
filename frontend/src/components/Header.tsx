import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} >
      <Toolbar>
        {/* Left side: Menu button */}
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>

        {/* Center: Search box */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Right side: Notifications, Shopping Cart, and User */}
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* User profile */}
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Hi <strong>jason@ui-lib.com</strong>
          </Typography>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <Avatar alt="User" src="/path/to/avatar.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
