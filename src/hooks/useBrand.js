import useSWR from "swr";
import { supabase } from "../config/initSupabase";
import { useCallback } from "react";

const SWROptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

const useBrand = () => {
  const fetcher = useCallback(async (url) => {
    const { data: brand, error } = await supabase.from(url).select("*");
    if (error && !allBrands) Alert.alert("Error", error.message);
    return brand;
  }, []);

  const { data, error, isLoading } = useSWR("Brand", fetcher, SWROptions);

  return {
    data,
    isLoading,
    error,
  };
};

export default useBrand;
