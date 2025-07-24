import { BASE_URL } from "@/shared/constants";

export const fetchColors = async () => {
  const response = await fetch(`${BASE_URL}/palette`);

  if (!response.ok) {
    throw new Error("Failed to fetch colors");
  }

  return response.json();
};
