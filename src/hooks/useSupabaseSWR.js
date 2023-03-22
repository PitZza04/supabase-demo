import useSWR from "swr";
import { supabase } from "../config/initSupabase";
import { useCallback } from "react";

const useSupabaseSWR = (query, SWROptions) => {
  const fetcher = useCallback(async (url) => {
    const { data, error } = await supabase.from(url).select("*");
    if (error && !data) Alert.alert("Error", error.message);
    return data;
  }, []);

  const { data, error, isLoading } = useSWR(query, fetcher, SWROptions);

  return {
    data,
    isLoading,
    error,
  };
};

export default useSupabaseSWR;
