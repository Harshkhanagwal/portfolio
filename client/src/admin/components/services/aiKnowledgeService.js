const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5001/";

export const getAIKnowledge = async () => {
  const response = await fetch(`${API_URL}/api/ai-knowledge`);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to fetch AI knowledge"
    );
  }

  return result;
};

export const createAIKnowledge = async (data) => {
  const response = await fetch(`${API_URL}/api/ai-knowledge`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to create AI knowledge"
    );
  }

  return result;
};

export const updateAIKnowledge = async (id, data) => {
  const response = await fetch(`${API_URL}/api/ai-knowledge/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to update AI knowledge"
    );
  }

  return result;
};

export const deleteAIKnowledge = async (id) => {
  const response = await fetch(`${API_URL}/api/ai-knowledge/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to delete AI knowledge"
    );
  }

  return result;
};