import useSWR from "swr";
import { useCallback } from "react";
import { supabase } from "../config/initSupabase";

// const fetcher = async (table, column, value) => {
//   const { data, error } = await supabase
//     .from(table)
//     .select(column)
//     .eq(column, value);
//   if (error) Alert.alert("Error", error.message);
//   return data;
// };

const useSupabaseJoinSWR = (query, SWROptions) => {
  const fetcher = useCallback(async (url) => {
    const [table, otherTable, id] = url.split("/");
    const { data, error } = await supabase
      .from(table)
      .select(`*, ${otherTable} (*))`)
      .match({ id: id });
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
export default useSupabaseJoinSWR;
