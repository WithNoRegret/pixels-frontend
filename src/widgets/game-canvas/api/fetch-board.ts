import { BASE_URL } from "@/shared/constants";
import { Pixel } from "@/shared/model";

export const fetchBoard = async (): Promise<Pixel[]> => {
  const response = await fetch(`${BASE_URL}/board/`);

  if (!response.ok) {
    throw new Error("Failed to fetch board");
  }

  return response.json();
};
