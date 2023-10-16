import React, { useState } from 'react';
import './SideBar.css';

function SideBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        id="sidebar-btn"
        onClick={toggleSidebar}
      >
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        {/* Sidebar content */}
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/customers">Customers</a></li>
          <li><a href="/categories">Categories</a></li>
          
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
