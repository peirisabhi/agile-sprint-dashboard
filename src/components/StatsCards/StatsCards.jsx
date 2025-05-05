import React from 'react';
// import './StatsCards.css';

const StatsCards = () => {
  const stats = [
    {
      title: 'Active Projects',
      icon: 'fas fa-project-diagram',
      value: '14',
      change: 'up',
      changeText: '2 from last month'
    },
    {
      title: 'Ongoing Sprints',
      icon: 'fas fa-running',
      value: '22',
      change: 'up',
      changeText: '5 from last week',
      type: 'success'
    },
    {
      title: 'Team Members',
      icon: 'fas fa-users',
      value: '89',
      change: 'down',
      changeText: '5 from last week',
      type: 'warning'
    },
    {
      title: 'Backlog Tickets',
      icon: 'fas fa-tasks',
      value: '22',
      change: 'up',
      changeText: '5 from last week',
      type: 'danger'
    },
    {
      title: 'Sprints Completion',
      icon: 'fas fa-check-circle',
      value: '22',
      change: 'up',
      changeText: '5 from last week',
      type: 'accent'
    },
    {
      title: 'Avg Cycle Time',
      icon: 'fas fa-check-circle',
      value: '22',
      change: 'up',
      changeText: '5 from last week',
      type: 'success'
    },
  ];

  return (
    <div className="row g-3 mb-4">
      {stats.map((stat, index) => (
        <div className="col-md-6 col-lg-4 col-xl-2 animate delay-1" key={index}>
          <div className={`stat-card ${stat.type || ''} h-100`}>
            <div className="stat-title">
              <i className={stat.icon}></i> {stat.title}
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.change}`}>
              <i className={`fas fa-arrow-${stat.change}`}></i> {stat.changeText}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;