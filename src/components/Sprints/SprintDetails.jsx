import { format } from 'date-fns';
import './sprints.css';

const SprintDetails = ({ selectedSprint }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  return (
    <div className="sprint-details">
      <h2>Sprint Details</h2>
      
      {selectedSprint ? (
        <div className="details-container">
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            <span className="detail-value">{selectedSprint.name}</span>
          </div>
          
          <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className={`detail-value status-${selectedSprint.state}`}>
                {selectedSprint.state}
              </span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Goal:</span>
              <span className="detail-value">{selectedSprint.goal}</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Dates:</span>
              <span className="detail-value">
                {this.formatDate(selectedSprint.startDate)} to {this.formatDate(selectedSprint.endDate)}
              </span>
            </div>
            
            {selectedSprint.completeDate && (
              <div className="detail-item">
                <span className="detail-label">Completed:</span>
                <span className="detail-value">{this.formatDate(selectedSprint.completeDate)}</span>
              </div>
            )}
        </div>
      ) : (
        <div className="no-sprint">
          <p>Select a sprint to view details</p>
        </div>
      )}
    </div>
  );
};

export default SprintDetails;