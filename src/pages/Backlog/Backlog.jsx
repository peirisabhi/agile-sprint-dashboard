import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Topbar from '../../components/Topbar/Topbar.jsx';
import ExcelImport from '../../components/ExcelImport';
import BacklogTable from '../../components/Backlog/BacklogTable';
import BacklogDetails from '../../components/Backlog/BacklogDetails';
import BacklogForm from '../../components/Backlog/BacklogForm';
import { dummyBacklogs } from '../../utils/dummyBacklogs';
import { checkDuplicateDescription } from '../../utils/backlogService';

const Backlog = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [backlogs, setBacklogs] = useState([]);
  const [selectedBacklog, setSelectedBacklog] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Load dummy data initially
  useEffect(() => {
    setBacklogs(dummyBacklogs);
  }, []);

  const handleDataImported = (importedData) => {
    setBacklogs(importedData);
    setSelectedBacklog(null);
    setShowForm(false);
    setError('');
  };

  const handleCreateBacklog = (newBacklog) => {
    // Check for duplicate description
    if (checkDuplicateDescription(backlogs, newBacklog.description)) {
      setError('A backlog with this description already exists!');
      return false;
    }

   // API here
    const createdBacklog = {
      ...newBacklog,
      key: `NEW-${Math.random().toString(36).substr(2, 8)}`,
      created: new Date().toISOString(),
      updated: new Date().toISOString()
    };
    
    setBacklogs([...backlogs, createdBacklog]);
    setError('');
    setShowForm(false);
    return true;
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} />
      <Topbar toggleSidebar={toggleSidebar} />

      <main className="main-content">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 mb-0">Backlog Management</h1>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSelectedBacklog(null);
                setShowForm(true);
                setError('');
              }}
            >
              <i className="fas fa-plus me-1"></i> New Backlog
            </button>
          </div>

          <ExcelImport onDataImported={handleDataImported} />

          {error && (
            <div className="alert alert-danger alert-dismissible fade show">
              {error}
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setError('')}
              ></button>
            </div>
          )}

          {showForm ? (
            <div className="card mb-4">
              <div className="card-header">
                <h3 className="card-title mb-0">
                  <i className="fas fa-plus-circle me-2"></i>
                  Create New Backlog Item
                </h3>
              </div>
              <div className="card-body">
                <BacklogForm 
                  onSubmit={handleCreateBacklog}
                  onCancel={() => {
                    setShowForm(false);
                    setError('');
                  }}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="card mb-4">
                <div className="card-header">
                  <h3 className="card-title mb-0">
                    <i className="fas fa-tasks me-2"></i>
                    Backlog Items ({backlogs.length})
                  </h3>
                </div>
                <div className="card-body">
                  <BacklogTable 
                    backlogs={backlogs} 
                    onSelectBacklog={setSelectedBacklog}
                    selectedBacklogKey={selectedBacklog?.key}
                  />
                </div>
              </div>

              {selectedBacklog && <BacklogDetails backlog={selectedBacklog} />}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Backlog;