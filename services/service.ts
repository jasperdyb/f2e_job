import React from "react";
import useSWR, { KeyedMutator } from "swr";
import apiList from "services/api";
import clientInstance from "services/client";

const fetcher = (url: string) => {
  if (url) {
    return clientInstance
      .get(url, {
        params: {},
      })
      .then((res) => res.data);
  } else {
    return null;
  }
};

export function useGet(): {
  data: Array<any>;
  isLoading: boolean;
  isError: boolean;
  mutate: KeyedMutator<any>;
} {
  const url = apiList.Basic;

  const { data, error, mutate } = useSWR([url], fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
