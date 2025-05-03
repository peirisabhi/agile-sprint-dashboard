import React from 'react';

const BacklogTable = ({ backlogs, onSelectBacklog, selectedBacklogKey }) => {
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return 'N/A';
    }
  };

  const getPriorityBadge = (priority) => {
    const priorityClasses = {
      High: 'bg-danger',
      Medium: 'bg-warning',
      Low: 'bg-success'
    };
    return (
      <span className={`badge ${priorityClasses[priority] || 'bg-secondary'}`}>
        {priority}
      </span>
    );
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Key</th>
            <th>Summary</th>
            <th>Project</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {backlogs.length > 0 ? (
            backlogs.map(backlog => (
              <tr 
                key={backlog.key} 
                className={selectedBacklogKey === backlog.key ? 'table-active' : ''}
              >
                <td>
                  <button
                    className="btn btn-link p-0 text-primary text-decoration-underline"
                    onClick={() => onSelectBacklog(backlog)}
                  >
                    {backlog.key}
                  </button>
                </td>
                <td>{backlog.summary}</td>
                <td>{backlog.project}</td>
                <td>{getPriorityBadge(backlog.priority)}</td>
                <td>{backlog.status}</td>
                <td>{formatDate(backlog.created)}</td>
                <td>
                  <button
                    className={`btn btn-sm ${selectedBacklogKey === backlog.key ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => onSelectBacklog(backlog)}
                  >
                    <i className="fas fa-eye"></i> View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                <div className="alert alert-info mb-0">
                  No backlog items found. Import from Excel or create a new one.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BacklogTable;