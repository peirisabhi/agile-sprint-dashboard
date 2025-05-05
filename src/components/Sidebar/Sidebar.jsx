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
          <a href="/dashboard">
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/sprints">
          <i class="fas fa-running"></i>
          <span>Sprints</span>
          </a>
        </li>
        <li>
          <a href="/projects">
            <i className="fas fa-project-diagram"></i>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="/employees">
          <i class="fas fa-users"></i>
          <span>Team</span>
          </a>
        </li>
        <li>
          <a href="/backlogs">
            <i className="fas fa-project-diagram"></i>
            <span>Back Logs</span>
          </a>
        </li>
        {/* Other menu items */}
      </ul>

      
    </aside>
  );
};

export default Sidebar;