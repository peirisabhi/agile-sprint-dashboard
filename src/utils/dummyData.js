// Employees data
export const dummyEmployees = [
    { id: 1, name: "John Doe", position: "Frontend Developer" },
    { id: 2, name: "Jane Smith", position: "Backend Developer" },
    { id: 3, name: "Mike Johnson", position: "UI/UX Designer" }
  ];
  
  // Projects data
  export const dummyProjects = [
    {
      id: 1,
      name: "Agile Dashboard",
      description: "Development of sprint management dashboard",
      createdDate: "2023-01-15T09:00:00Z"
    },
    {
      id: 2,
      name: "Mobile App",
      description: "Cross-platform mobile application",
      createdDate: "2023-02-20T09:00:00Z"
    }
  ];
  
  // Employee-Project associations
  export const dummyEmployeeProjects = [
    { id: 1, employee_id: 1, project_id: 1 }, // John on Agile Dashboard
    { id: 2, employee_id: 2, project_id: 1 }, // Jane on Agile Dashboard
    { id: 3, employee_id: 2, project_id: 2 },  // Jane on Mobile App
    { id: 4, employee_id: 3, project_id: 2 }   // Mike on Mobile App
  ];