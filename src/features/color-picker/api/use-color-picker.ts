"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/constants";

import { fetchColors } from "./fetch-colors";

export const useColorPicker = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.COLOR_PICKER],
    queryFn: fetchColors,
  });
};
