import { format } from 'date-fns';
import './sprints.css';

const SprintList = ({ sprints, selectedSprintId, onSprintSelected }) => {
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMM dd');
    };

    return (
        <div className="sprint-list">
            <h2>All Sprints</h2>
            <div className="list-container">
                {sprints.map(sprint => (
                    <div
                        key={sprint.id}
                        className={`sprint-item ${selectedSprintId === sprint.id ? 'active' : ''}`}
                        onClick={() => onSprintSelected(sprint)}
                    >
                        <div className="sprint-name">{sprint.name}</div>
                        <div className="sprint-dates">
                            {this.formatDate(sprint.startDate)} - {this.formatDate(sprint.endDate)}
                        </div>
                        <div className={`sprint-status status-${sprint.state}`}>
                            {sprint.state}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SprintList;

