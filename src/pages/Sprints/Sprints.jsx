import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Topbar from "../../components/Topbar/Topbar.jsx";
import { dummySprints } from "../../utils/dummySprints";

const Sprints = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [selectedSprint, setSelectedSprint] = React.useState(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    React.useEffect(() => {
        if (dummySprints.length > 0 && !selectedSprint) {
            setSelectedSprint(dummySprints[0]);
        }
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    const getStatusBadge = (status) => {
        const statusClasses = {
            active: 'bg-success',
            closed: 'bg-secondary',
            future: 'bg-info'
        };
        return (
            <span className={`badge ${statusClasses[status] || 'bg-secondary'}`}>
                {status}
            </span>
        );
    };

    return (
        <>
            <Sidebar isOpen={sidebarOpen}/>
            <Topbar toggleSidebar={toggleSidebar}/>

            <main className="main-content">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-4 animate">
                        <h1 className="h3 mb-0">Sprint Planning</h1>
                        <div>
                            <button className="btn btn-primary">
                                <i className="fas fa-plus me-1"></i> New Sprint
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 animate delay-1">
                            <div className="card h-100">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h3 className="card-title mb-0">
                                        <i className="fas fa-running me-2"></i>
                                        Sprint Overview
                                    </h3>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                type="button" id="sprintFilter" data-bs-toggle="dropdown">
                                            <i className="fas fa-filter"></i> Filter
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">All Sprints</a></li>
                                            <li><a className="dropdown-item" href="#">Active Only</a></li>
                                            <li><a className="dropdown-item" href="#">Completed</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="table-light">
                                            <tr>
                                                <th>Sprint Name</th>
                                                <th>Status</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Goal</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {dummySprints.map(sprint => (
                                                <tr 
                                                    key={sprint.id} 
                                                    className={selectedSprint?.id === sprint.id ? 'table-active' : ''}
                                                    onClick={() => setSelectedSprint(sprint)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <td>
                                                        <strong>{sprint.name}</strong>
                                                        {selectedSprint?.id === sprint.id && (
                                                            <span className="ms-2 text-primary">
                                                                <i className="fas fa-check-circle"></i>
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td>{getStatusBadge(sprint.state)}</td>
                                                    <td>{formatDate(sprint.startDate)}</td>
                                                    <td>{formatDate(sprint.endDate)}</td>
                                                    <td className="text-truncate" style={{ maxWidth: '200px' }}>
                                                        {sprint.goal}
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-primary me-1">
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-outline-danger">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sprint Details Section */}
                    {selectedSprint && (
                        <div className="row mt-4">
                            <div className="col-12 animate delay-2">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title mb-0">
                                            <i className="fas fa-info-circle me-2"></i>
                                            Sprint Details: {selectedSprint.name}
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <dl className="row">
                                                    <dt className="col-sm-4">Sprint ID:</dt>
                                                    <dd className="col-sm-8">{selectedSprint.id}</dd>

                                                    <dt className="col-sm-4">Status:</dt>
                                                    <dd className="col-sm-8">{getStatusBadge(selectedSprint.state)}</dd>

                                                    <dt className="col-sm-4">Goal:</dt>
                                                    <dd className="col-sm-8">{selectedSprint.goal}</dd>
                                                </dl>
                                            </div>
                                            <div className="col-md-6">
                                                <dl className="row">
                                                    <dt className="col-sm-4">Start Date:</dt>
                                                    <dd className="col-sm-8">{formatDate(selectedSprint.startDate)}</dd>

                                                    <dt className="col-sm-4">End Date:</dt>
                                                    <dd className="col-sm-8">{formatDate(selectedSprint.endDate)}</dd>

                                                    {selectedSprint.completeDate && (
                                                        <>
                                                            <dt className="col-sm-4">Completed:</dt>
                                                            <dd className="col-sm-8">{formatDate(selectedSprint.completeDate)}</dd>
                                                        </>
                                                    )}
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default Sprints;