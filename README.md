# Agile Sprint Management Dashboard

A dynamic dashboard for Agile project management, designed to streamline sprint planning, team capacity tracking, and project oversight. Built for software teams using Jira-like workflows.

---

## 🚀 Features

### 1. **Project Management**
- Track multiple projects with key details
- Example from your system:
  | ID | Name             | Description                          | Created Date |
  |----|------------------|--------------------------------------|--------------|
  | 1  | Agile Dashboard  | Development of sprint management dashboard | 2023-01-15 |
  | 2  | Mobile App       | Cross-platform mobile application    | 2023-02-20 |

### 2. **Sprint Planning (Sprint IQ)**
- Manage sprints with real-time status tracking
- Example sprint from your data:
  | Sprint Name               | Status    | Start Date   | End Date     | Goal                          |
  |---------------------------|-----------|--------------|--------------|-------------------------------|
  | Sprint 0 - Setup          | COMPLETED | 2023-04-15   | 2023-04-28   | Project setup & configuration |
  | Sprint 1 - Feature Dev    | IN_PROGRESS | 2023-05-01   | 2023-05-14   | User authentication flow      |

### 3. **Team Capacity Management**
- Track leaves and availability
  | Resource   | Planned Leaves (Days) | Unplanned Leaves |
  |------------|-----------------------|------------------|
  | Member A   | 1                     | 0                |
  | Member B   | 0.5                   | 0                |

### 4. **Agile Workflow Integration**
- Plan ceremonies: Backlog refinement, sprint reviews
- Visualize team allocations and effective capacity

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/peirisabhi/agile-dashboard.git
   cd agile-dashboard && npm install
   npm start
