import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Topbar from '../../components/Topbar/Topbar.jsx';
import ProjectTable from '../../components/Projects/ProjectTable';
import ProjectDetails from '../../components/Projects/ProjectDetails';
import { dummyProjects, dummyEmployees, dummyEmployeeProjects } from '../../utils/dummyData';

const Projects = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Get employees assigned to selected project
  const getAssignedEmployees = (projectId) => {
    const assignments = dummyEmployeeProjects.filter(ep => ep.project_id === projectId);
    return assignments.map(assignment => 
      dummyEmployees.find(e => e.id === assignment.employee_id)
    );
  };

  const handleProjectSelect = (project) => {
    const employees = getAssignedEmployees(project.id);
    setSelectedProject({
      ...project,
      employees
    });
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} />
      <Topbar toggleSidebar={toggleSidebar} />

      <main className="main-content">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 mb-0">Project Management</h1>
            <button className="btn btn-primary">
              <i className="fas fa-plus me-1"></i> New Project
            </button>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h3 className="card-title mb-0">
                <i className="fas fa-project-diagram me-2"></i>
                All Projects
              </h3>
            </div>
            <div className="card-body">
              <ProjectTable 
                projects={dummyProjects} 
                onSelectProject={handleProjectSelect}
                selectedProjectId={selectedProject?.id}
              />
            </div>
          </div>

          {selectedProject && (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title mb-0">
                  <i className="fas fa-info-circle me-2"></i>
                  Project Details: {selectedProject.name}
                </h3>
              </div>
              <div className="card-body">
                <ProjectDetails project={selectedProject} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Projects;