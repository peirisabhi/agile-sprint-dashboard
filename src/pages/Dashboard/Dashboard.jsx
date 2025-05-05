import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Topbar from '../../components/Topbar/Topbar.jsx';
import StatsCards from '../../components/StatsCards/StatsCards.jsx';
// import ProjectsTable from '../components/ProjectsTable/ProjectsTable';
// import VelocityChart from '../components/Charts/VelocityChart';
// import WorkDistributionChart from '../components/Charts/WorkDistributionChart';
// import SprintRecommendations from '../components/SprintRecommendations/SprintRecommendations';
// import TeamAllocation from '../components/TeamAllocation/TeamAllocation';
// import TicketPredictionChart from '../components/Charts/TicketPredictionChart';
// import './Dashboard.css'

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <Sidebar isOpen={sidebarOpen}/>
            <Topbar toggleSidebar={toggleSidebar}/>

            <main className="main-content">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-4 animate">
                        <h1 className="h3 mb-0">Agile Analytics Dashboard</h1>
                        <div>
                            <button className="btn btn-outline-secondary me-2">
                                <i className="fas fa-download me-1"></i> Export
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-plus me-1"></i> New Sprint
                            </button>
                        </div>
                    </div>

                    <StatsCards/>

                    <div className="row g-3">
                        <div className="col-lg-12 animate delay-1">
                            <div className="card h-100">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3 className="card-title mb-0">
                                        <i className="fas fa-project-diagram"></i>
                                        Projects Overview
                                    </h3>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                type="button" id="projectFilter" data-bs-toggle="dropdown">
                                            <i className="fas fa-filter"></i> Filter
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">All Projects</a></li>
                                            <li><a className="dropdown-item" href="#">Active Only</a></li>
                                            <li><a className="dropdown-item" href="#">Behind Schedule</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>Project</th>
                                                <th>Team</th>
                                                <th>Backlog</th>
                                                <th>Sprint</th>
                                                <th>Status</th>
                                                <th>Progress</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <strong>E-commerce Platform</strong>
                                                    <div className="text-muted small">Web Development</div>
                                                </td>
                                                <td>8</td>
                                                <td>142</td>
                                                <td>Sprint #12</td>
                                                <td>
                                                    {/*<span className={'badge badge-secondary'}>In Progress</span>*/}
                                                    <span
                                                        className={'badge bg-success'}>
                                                           Done
                                                    </span>
                                                </td>
                                                <td>
                                                    {/*<div className="progress">*/}
                                                    {/*    <div className="progress-bar bg-warning"></div>*/}
                                                    {/*</div>*/}
                                                    <div className="progress" style={{height: '20px'}}>
                                                        <div
                                                            className={`progress-bar ${100 == 50 ? 'bg-success' : 'bg-warning'}`}
                                                            role="progressbar"
                                                            style={{width: `${30}%`}}
                                                        >
                                                            {15}%
                                                        </div>
                                                    </div>
                                                    <small className="text-muted">65% completed</small>
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Dashboard;