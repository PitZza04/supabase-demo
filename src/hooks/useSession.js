import AsyncStorage from "@react-native-async-storage/async-storage";
import useSWR from "swr";

const fetcher = async () => {
  const value = await AsyncStorage.getItem(
    "sb-tpbrgzfczohtyssijgxb-auth-token"
  );
  return JSON.parse(value);
};

const useSession = () => {
  const { data, error } = useSWR("session", fetcher);
  return {
    data,
    error,
  };
};

export default useSession;
