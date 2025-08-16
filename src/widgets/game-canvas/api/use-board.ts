"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/constants";

import { fetchBoard } from "./fetch-board";

export const useBoard = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BOARD],
    queryFn: fetchBoard,
  });
};
