import useSWR from "swr";
import { supabase } from "../config/initSupabase";
import { useCallback } from "react";
const fetcher = async (url) => {
  const { data, error } = await supabase.from(url).select("*");
  console.log("data", data);
  if (error && !data) Alert.alert("Error", error.message);

  return data;
};

const useSupabaseSWR = (query, SWROptions) => {
  const { data, error, isLoading } = useSWR(query, fetcher, SWROptions);

  return {
    data,
    isLoading,
    error,
  };
};

export default useSupabaseSWR;
