import React from 'react';

const ProjectDetails = ({ project }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h5>Project Information</h5>
        <dl className="row">
          <dt className="col-sm-3">Description:</dt>
          <dd className="col-sm-9">{project.description}</dd>
          
          <dt className="col-sm-3">Created:</dt>
          <dd className="col-sm-9">{formatDate(project.createdDate)}</dd>
        </dl>
      </div>
      
      <div className="col-md-6">
        <h5>Team Members ({project.employees.length})</h5>
        {project.employees.length > 0 ? (
          <ul className="list-group">
            {project.employees.map(employee => (
              <li key={employee.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{employee.name}</strong>
                    <div className="text-muted small">{employee.position}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="alert alert-info">No team members assigned</div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;