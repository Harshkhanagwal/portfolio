const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const loginAdmin = async (username, password) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: "include",

    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

export const logoutAdmin = async () => {
  const response = await fetch(`${API_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Logout failed");
  }

  return data;
};

export const getCurrentAdmin = async () => {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Not authenticated");
  }

  return data;
};
