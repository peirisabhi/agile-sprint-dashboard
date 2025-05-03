import React from 'react';

const ProjectTable = ({ projects, onSelectProject, selectedProjectId }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr 
              key={project.id} 
              className={selectedProjectId === project.id ? 'table-active' : ''}
            >
              <td>{project.id}</td>
              <td>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProject(project);
                  }}
                  className="text-primary"
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {project.name}
                </a>
              </td>
              <td className="text-truncate" style={{ maxWidth: '200px' }}>
                {project.description}
              </td>
              <td>{formatDate(project.createdDate)}</td>
              <td>
                <button
                  className={`btn btn-sm ${selectedProjectId === project.id ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => onSelectProject(project)}
                >
                  <i className="fas fa-eye"></i> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;