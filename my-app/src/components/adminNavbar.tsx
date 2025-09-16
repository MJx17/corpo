import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import useAuthStore from '../store/AuthStore';
import '../styles/navbar.scss';

interface AdminNavbarProps {
  onToggleSidebar: () => void;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ onToggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleProfileRedirect = () => {
    navigate('/user-profile');
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-content">
        {/* Sidebar Toggle */}
        <button className="sidebar-button" onClick={onToggleSidebar} aria-label="Toggle Sidebar">
          &#9776;
        </button>

        {/* Right Section */}
        <div className="right-section">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="search-input"
            />
            <IconButton className="search-button">
              <SearchIcon />
            </IconButton>
          </div>

          {/* Icons */}
          <div className="icon-group">
            <IconButton className="icon-button" aria-label="Notifications">
              <NotificationsIcon />
            </IconButton>
            <IconButton className="icon-button" aria-label="Settings">
              <SettingsIcon />
            </IconButton>
            <IconButton className="icon-button" onClick={handleProfileClick} aria-label="User Profile">
              <PersonIcon />
            </IconButton>
          </div>

          {/* Dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleProfileRedirect}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
