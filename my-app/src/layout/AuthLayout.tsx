import React, { ReactNode, useState } from 'react';
import Navbar from '../components/adminNavbar';
import SidebarComponent from '../components/sidebar';
import '../styles/layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="layout-wrapper">
      <Navbar onToggleSidebar={() => setToggled(!toggled)} />

      <div className="layout-content">
        <SidebarComponent 
          toggled={toggled} 
          onBackdropClick={() => setToggled(false)} 
        />

        <div className="main-content">
          <main>{children}</main>
        </div>
      </div>

      {toggled && (
        <div className="sidebar-backdrop" onClick={() => setToggled(false)} />
      )}
    </div>
  );
};

export default Layout;
