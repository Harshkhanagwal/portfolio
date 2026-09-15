const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5001";

export const getEducation = async () => {
  const response = await fetch(`${API_URL}/api/education`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to fetch education"
    );
  }

  return result;
};

export const createEducation = async (data) => {
  const response = await fetch(`${API_URL}/api/education`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to create education"
    );
  }

  return result;
};

export const updateEducation = async (id, data) => {
  const response = await fetch(`${API_URL}/api/education/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to update education"
    );
  }

  return result;
};

export const deleteEducation = async (id) => {
  const response = await fetch(`${API_URL}/api/education/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to delete education"
    );
  }

  return result;
};