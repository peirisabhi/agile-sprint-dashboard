import React from 'react';

const EmployeeDetails = ({ employee }) => {
  if (!employee) return (
    <div className="alert alert-info">Select an employee to view details</div>
  );

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="mb-0">Employee Details</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h5>{employee.name}</h5>
            <p className="text-muted">{employee.position}</p>
            
            <dl className="row">
              <dt className="col-sm-4">Email:</dt>
              <dd className="col-sm-8">{employee.email}</dd>
              
              <dt className="col-sm-4">Department:</dt>
              <dd className="col-sm-8">{employee.department}</dd>
              
              <dt className="col-sm-4">Join Date:</dt>
              <dd className="col-sm-8">
                {new Date(employee.joinDate).toLocaleDateString()}
              </dd>
            </dl>
          </div>
          
          <div className="col-md-6">
            <h6>Skills</h6>
            <div className="mb-3">
              {employee.skills.map(skill => (
                <span key={skill} className="badge bg-primary me-1">
                  {skill}
                </span>
              ))}
            </div>
            
            <h6>Current Allocation</h6>
            <div className="progress mb-3" style={{ height: '25px' }}>
              <div 
                className={`progress-bar ${employee.allocation === 100 ? 'bg-success' : 'bg-warning'}`}
                style={{ width: `${employee.allocation}%` }}
              >
                {employee.allocation}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;