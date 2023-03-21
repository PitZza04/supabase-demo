import useSWR from "swr";
import { supabase } from "../config/initSupabase";

const fetcher = async (url) => {
  console.log("fetcher model once");
  const { data: brand, error } = await supabase.from(url).select("*");
  //   const { data: allBrands, error } = await supabase
  //     .from(url)
  //     .select("name, id, Model (name, brand_id, id)");
  // const { data: brandModel, error: errorModel } = await supabase
  //   .from("Brand")
  //   .select("name, Model (name, brand_id)")
  //   .match({ id: id });
  if (error && !allBrands) Alert.alert("Error", error.message);
  return brand;
};

const SWROptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

const useBrand = () => {
  const { data, error, isLoading } = useSWR("Model/", fetcher, SWROptions);

  return {
    data,
    isLoading,
    error,
  };
};

export default useBrand;
