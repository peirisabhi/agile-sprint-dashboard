import React from 'react';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import './Charts.css';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const BurndownChart = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [
      {
        label: 'Ideal',
        data: [49, 42, 35, 28, 21, 14, 7, 0, null, null],
        borderColor: '#ef233c',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        tension: 0.1,
        borderWidth: 2
      },
      {
        label: 'Actual',
        data: [49, 45, 43, 40, 38, 35, 32, null, null, null],
        borderColor: '#4361ee',
        backgroundColor: 'transparent',
        tension: 0.3,
        borderWidth: 2,
        pointBackgroundColor: '#4361ee',
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Story Points Remaining',
          color: '#6c757d'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3 className="card-title mb-0">
          <i className="fas fa-running"></i>
          Sprint Burndown
        </h3>
        <span className="badge badge-primary">E-commerce</span>
      </div>
      <div className="card-body">
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 className="mb-0">Sprint #12</h6>
              <small className="text-muted">5 days remaining</small>
            </div>
            <div className="text-end">
              <div className="text-primary fw-bold">65% completed</div>
              <small className="text-muted">32/49 story points</small>
            </div>
          </div>
          <div className="alert alert-warning mb-0">
            <i className="fas fa-exclamation-triangle me-2"></i>
            Current velocity suggests 2 days delay
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurndownChart;