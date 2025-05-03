import React, { useState } from 'react';

const BacklogForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    boardId: '',
    isBacklog: true,
    fixVersion: '',
    priority: 'Medium',
    assignee: '',
    status: 'To Do',
    status_category: '',
    creator: '',
    reporter: '',
    issuetype: 'Task',
    project: '',
    description: '',
    summary: '',
    estimated_effort: 8
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Summary*</label>
            <input
              type="text"
              className="form-control"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Description*</label>
            <textarea
              className="form-control"
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Project*</label>
            <input
              type="text"
              className="form-control"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select
              className="form-select"
              name="issuetype"
              value={formData.issuetype}
              onChange={handleChange}
            >
              <option value="Task">Task</option>
              <option value="Sub-task">Sub-task</option>
              <option value="Bug">Bug</option>
              <option value="Improvement">Improvement</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Estimated Effort (hours)</label>
            <input
              type="number"
              className="form-control"
              name="estimated_effort"
              min="1"
              value={formData.estimated_effort}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="col-12">
          <div className="d-flex justify-content-end">
            <button 
              type="button" 
              className="btn btn-outline-secondary me-2"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Backlog Item
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BacklogForm;