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

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={sidebarOpen} />
      <Topbar toggleSidebar={toggleSidebar} />
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

          <StatsCards />

          <div className="row g-3">
            {/*<div className="col-lg-8 animate delay-1">*/}
            {/*  <ProjectsTable />*/}
            {/*</div>*/}

            <div className="col-lg-4 animate delay-1">
              <BurndownChart />
            </div>

            {/*<div className="col-lg-6 animate delay-2">*/}
            {/*  <VelocityChart />*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 animate delay-2">*/}
            {/*  <WorkDistributionChart />*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 animate delay-3">*/}
            {/*  <SprintRecommendations />*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 animate delay-3">*/}
            {/*  <TeamAllocation />*/}
            {/*</div>*/}

            {/*<div className="col-12 animate delay-4">*/}
            {/*  <TicketPredictionChart />*/}
            {/*</div>*/}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;