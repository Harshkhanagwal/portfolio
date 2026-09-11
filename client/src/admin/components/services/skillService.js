const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001";

export const getSkills = async () => {
  const response = await fetch(`${API_URL}/api/skills`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch skills");
  }

  return data;
};


export const createSkill = async (skillData) => {
  const response = await fetch(`${API_URL}/api/skills`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skillData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create skill");
  }

  return data;
};


export const updateSkill = async (id, skillData) => {
  const response = await fetch(`${API_URL}/api/skills/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skillData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update skill");
  }

  return data;
};


export const deleteSkill = async (id) => {
  const response = await fetch(`${API_URL}/api/skills/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete skill");
  }

  return data;
};