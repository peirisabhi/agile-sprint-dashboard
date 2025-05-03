// This service will handle all backlog operations
export const processExcelData = (jsonData) => {
    return jsonData.map(item => ({
      boardId: item.boardId || 0,
      isBacklog: String(item.isBacklog).toUpperCase() === "TRUE",
      fixVersion: item.fixVersion || "",
      priority: item.priority || "Medium",
      assignee: item.assignee || "",
      status: item.status || "To Do",
      status_category: item.status_category || "",
      creator: item.creator || "",
      reporter: item.reporter || "",
      issuetype: item.issuetype || "Task",
      project: item.project || "",
      created: item.created || new Date().toISOString(),
      updated: item.updated || new Date().toISOString(),
      description: item.description || "",
      summary: item.summary || "",
      estimated_effort: Number(item.estimated_effort) || 0,
      key: item.key || `GEN-${Math.random().toString(36).substr(2, 8)}`
    }));
  };
  
  export const checkDuplicateDescription = (backlogs, newDescription) => {
    return backlogs.some(backlog => 
      backlog.description.toLowerCase() === newDescription.toLowerCase()
    );
  };