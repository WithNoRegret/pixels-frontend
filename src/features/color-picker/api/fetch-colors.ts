import { BASE_URL } from "@/shared/constants";
import { Color } from "@/shared/model";

export const fetchColors = async (): Promise<Color[]> => {
  const response = await fetch(`${BASE_URL}/palette/`);

  if (!response.ok) {
    throw new Error("Failed to fetch colors");
  }

  return response.json();
};
