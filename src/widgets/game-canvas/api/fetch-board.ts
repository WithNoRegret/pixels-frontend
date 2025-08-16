import { BASE_URL } from "@/shared/constants";
import { Board } from "@/shared/model";

export const fetchBoard = async (): Promise<Board[]> => {
  const response = await fetch(`${BASE_URL}/board/`);

  if (!response.ok) {
    throw new Error("Failed to fetch board");
  }

  return response.json();
};
