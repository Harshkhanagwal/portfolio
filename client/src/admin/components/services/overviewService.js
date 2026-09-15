const API_URL =  import.meta.env.VITE_API_URL || "http://localhost:5001/api/admin/overview";

export const getAdminOverview = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to load admin overview"
    );
  }

  return result;
};