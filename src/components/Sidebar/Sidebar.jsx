import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">
          <i className="fas fa-rocket"></i>
          <span>Sprint IQ</span>
        </a>
      </div>

      <ul className="sidebar-menu">
        <li className="active">
          <a href="#">
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-project-diagram"></i>
            <span>Projects</span>
          </a>
        </li>
        {/* Other menu items */}
      </ul>

      
    </aside>
  );
};

export default Sidebar;