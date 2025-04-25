import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">
          <i className="fas fa-rocket"></i>
          <span>AgileIntel</span>
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

      <div className="sidebar-footer">
        <div className="card bg-light">
          <div className="card-body p-3">
            <h6 className="mb-2">Upgrade to Pro</h6>
            <p className="text-muted small mb-2">Get advanced analytics and predictions</p>
            <button className="btn btn-primary btn-sm w-100">Upgrade Now</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;