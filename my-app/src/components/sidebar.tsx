
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
// import EventIcon from '@mui/icons-material/Event';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import '../styles/navbar.scss';

interface AdminSidebarProps {
  toggled: boolean;
  onBackdropClick: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ toggled, onBackdropClick }) => {
  return (
  <Sidebar
  onBackdropClick={onBackdropClick}
  toggled={toggled}
  breakPoint="all"
  className={`admin-sidebar ${toggled ? 'open' : 'closed'}`}
>
  <Menu className="admin-menu">
    <MenuItem
      icon={<GroupIcon className="menu-icon" />}
      component={<Link to="/create-user" className="menu-link" />}
    >
      Create User
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/Home" className="menu-link" />}>
      Home
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/currency-list" className="menu-link" />}>
      CurrencyList
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/currency-management" className="menu-link" />}>
      CurrencyManagement
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/card-management" className="menu-link" />}>
      Card Management
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/cardlist" className="menu-link" />}>
      CardList
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/slidelist" className="menu-link" />}>
      SlideList
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/slidelist-admin" className="menu-link" />}>
      SlideList
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/role-permission-management" className="menu-link" />}>
      URPM
    </MenuItem>

    <MenuItem icon={<GroupIcon className="menu-icon" />} component={<Link to="/resource-list" className="menu-link" />}>
      Route Auth Resources
    </MenuItem>
  </Menu>
</Sidebar>

  );
};

export default AdminSidebar;
