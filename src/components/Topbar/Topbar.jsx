import React from 'react';
// import './Topbar.css';

const Topbar = ({ toggleSidebar }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    // Here you would typically call your logout API
    alert('Logging out...');
    // Then redirect to login page
    window.location.href = '/login';
  };

  return (
    <header className="topbar">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <button className="btn btn-link me-3 d-lg-none" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active" aria-current="page">Agile Analytics</li>
            </ol>
          </nav>

          <div className="ms-auto d-flex align-items-center">
            <div className="search-box me-3">
              <i className="fas fa-search"></i>
              <input type="text" className="form-control border-0 bg-light" placeholder="Search..." />
            </div>

            <div className="topbar-action me-2">
              <i className="fas fa-bell"></i>
              <span className="topbar-badge">3</span>
            </div>

            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="user-avatar me-2" alt="User" />
                <span className="d-none d-md-inline">Sarah Johnson</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i> Profile</a></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i> Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={handleLogout}><i className="fas fa-sign-out-alt me-2"></i> Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;