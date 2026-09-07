const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001";

export const getProjects = async () => {
  const response = await fetch(`${API_URL}/api/projects`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch projects");
  }

  return data;
};

export const createProject = async (projectData) => {
  const response = await fetch(`${API_URL}/api/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create project");
  }

  return data;
};

export const updateProject = async (id, projectData) => {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update project");
  }

  return data;
};

export const deleteProject = async (id) => {
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete project");
  }

  return data;
};