const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001";

/* -------------------- GET ALL EXPERIENCE -------------------- */

export const getExperiences = async () => {
  const response = await fetch(
    `${API_URL}/api/experience`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch experience"
    );
  }

  return data;
};

/* -------------------- GET SINGLE EXPERIENCE -------------------- */

export const getExperience = async (id) => {
  const response = await fetch(
    `${API_URL}/api/experience/${id}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch experience"
    );
  }

  return data;
};

/* -------------------- CREATE EXPERIENCE -------------------- */

export const createExperience = async (experienceData) => {
  const response = await fetch(
    `${API_URL}/api/experience`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(experienceData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to create experience"
    );
  }

  return data;
};

/* -------------------- UPDATE EXPERIENCE -------------------- */

export const updateExperience = async (
  id,
  experienceData
) => {
  const response = await fetch(
    `${API_URL}/api/experience/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(experienceData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to update experience"
    );
  }

  return data;
};

/* -------------------- DELETE EXPERIENCE -------------------- */

export const deleteExperience = async (id) => {
  const response = await fetch(
    `${API_URL}/api/experience/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to delete experience"
    );
  }

  return data;
};