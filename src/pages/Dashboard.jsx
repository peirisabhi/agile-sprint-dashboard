import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Topbar from '../components/Topbar/Topbar';
import StatsCards from '../components/StatsCards/StatsCards';
// import ProjectsTable from '../components/ProjectsTable/ProjectsTable';
import BurndownChart from '../components/Charts/BurndownChart';
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

                </div>
            </main>
        </>
    );
};

export default Dashboard;