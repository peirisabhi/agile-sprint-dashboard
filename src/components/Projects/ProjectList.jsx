import React from 'react';
import { dummyProjects } from '../../utils/dummyData';

const ProjectList = ({ onSelectProject, selectedProjectId }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyProjects.map(project => (
                        <tr
                            key={project.id}
                            className={selectedProjectId === project.id ? 'table-active' : ''}
                        >
                            <td>{project.id}</td>
                            <td>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSelectProject(project.id);
                                    }}
                                    className="text-primary"
                                    style={{ textDecoration: 'underline' }}
                                >
                                    {project.name}
                                </a>
                            </td>
                            <td className="text-truncate" style={{ maxWidth: '200px' }}>
                                {project.description}
                            </td>
                            <td>{formatDate(project.createdDate)}</td>
                            <td>
                                <button
                                    className={`btn btn-sm ${selectedProjectId === project.id ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => onSelectProject(project.id)}
                                >
                                    <i className="fas fa-eye"></i> View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;