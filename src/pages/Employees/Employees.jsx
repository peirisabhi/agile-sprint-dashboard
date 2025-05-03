import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Topbar from '../../components/Topbar/Topbar.jsx';
import { dummyEmployees } from '../../utils/dummyEmployees';
import EmployeeTable from '../../components/Employees/EmployeeTable.jsx';
import EmployeeDetails from '../../components/Employees/EmployeeDetails.jsx';

const Employees = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} />
      <Topbar toggleSidebar={toggleSidebar} />

      <main className="main-content">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 mb-0">Employee Management</h1>
            <button className="btn btn-primary">
              <i className="fas fa-plus me-1"></i> Add Employee
            </button>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header">
                  <h3 className="card-title mb-0">
                    <i className="fas fa-users me-2"></i>
                    All Employees
                  </h3>
                </div>
                <div className="card-body">
                  <EmployeeTable 
                    employees={dummyEmployees} 
                    onSelectEmployee={setSelectedEmployee}
                  />
                </div>
              </div>
            </div>
          </div>

          {selectedEmployee && (
            <div className="row">
              <div className="col-12">
                <EmployeeDetails employee={selectedEmployee} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Employees;