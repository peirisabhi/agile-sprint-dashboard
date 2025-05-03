import React from 'react';

const BacklogDetails = ({ backlog }) => {
  if (!backlog) return null;

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleString();
    } catch {
      return 'N/A';
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-header bg-light">
        <h4>
          <span className="badge bg-secondary me-2">{backlog.key}</span>
          {backlog.summary}
        </h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="border-bottom pb-2">Basic Information</h5>
              <dl className="row">
                <dt className="col-sm-4">Project:</dt>
                <dd className="col-sm-8">{backlog.project}</dd>

                <dt className="col-sm-4">Type:</dt>
                <dd className="col-sm-8">{backlog.issuetype}</dd>

                <dt className="col-sm-4">Priority:</dt>
                <dd className="col-sm-8">
                  <span className={`badge ${
                    backlog.priority === 'High' ? 'bg-danger' : 
                    backlog.priority === 'Medium' ? 'bg-warning' : 'bg-success'
                  }`}>
                    {backlog.priority}
                  </span>
                </dd>

                <dt className="col-sm-4">Status:</dt>
                <dd className="col-sm-8">{backlog.status}</dd>
              </dl>
            </div>

            <div className="mb-3">
              <h5 className="border-bottom pb-2">People</h5>
              <dl className="row">
                <dt className="col-sm-4">Reporter:</dt>
                <dd className="col-sm-8">{backlog.reporter}</dd>

                <dt className="col-sm-4">Creator:</dt>
                <dd className="col-sm-8">{backlog.creator}</dd>

                <dt className="col-sm-4">Assignee:</dt>
                <dd className="col-sm-8">{backlog.assignee || 'Unassigned'}</dd>
              </dl>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="border-bottom pb-2">Dates</h5>
              <dl className="row">
                <dt className="col-sm-4">Created:</dt>
                <dd className="col-sm-8">{formatDate(backlog.created)}</dd>

                <dt className="col-sm-4">Updated:</dt>
                <dd className="col-sm-8">{formatDate(backlog.updated)}</dd>
              </dl>
            </div>

            <div className="mb-3">
              <h5 className="border-bottom pb-2">Effort</h5>
              <div className="d-flex align-items-center">
                <div className="progress flex-grow-1 me-3" style={{ height: '20px' }}>
                  <div 
                    className="progress-bar bg-info" 
                    role="progressbar" 
                    style={{ width: `${Math.min(backlog.estimated_effort, 100)}%` }}
                    aria-valuenow={backlog.estimated_effort}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {backlog.estimated_effort} hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3">
            <h5 className="border-bottom pb-2">Description</h5>
            <div 
              className="card card-body bg-light" 
              style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}
            >
              {backlog.description || 'No description provided'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklogDetails;