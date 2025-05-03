import React from 'react';

const EmployeeTable = ({ employees, onSelectEmployee }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Join Date</th>
            <th>Allocation %</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <strong>{employee.name}</strong>
                <div className="small text-muted">{employee.email}</div>
              </td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{formatDate(employee.joinDate)}</td>
              <td>
                <div className="progress" style={{ height: '20px' }}>
                  <div 
                    className={`progress-bar ${employee.allocation === 100 ? 'bg-success' : 'bg-warning'}`}
                    role="progressbar"
                    style={{ width: `${employee.allocation}%` }}
                  >
                    {employee.allocation}%
                  </div>
                </div>
              </td>
              <td>
                <button 
                  className="btn btn-sm btn-outline-primary me-1"
                  onClick={() => onSelectEmployee(employee)}
                >
                  <i className="fas fa-eye"></i> View
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;