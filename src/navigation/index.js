import React, { useEffect } from "react";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useDispatch, useSelector } from "react-redux";
//import { authListener } from "../redux/action/authSlice";
import { supabase } from "../config/initSupabase";
import { setSignIn, setSignOut } from "../redux/action/authSlice";
export default function RootNavigation() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSignIn(session));
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (_event === "SIGNED_OUT") {
          dispatch(setSignOut());
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return auth ? <MainStack /> : <AuthStack />;
}

// if (session) {
//   dispatch(setSignIn(session));
// }
// const fetchSession = async () => {
//   const value = await AsyncStorage.getItem(
//     "sb-tpbrgzfczohtyssijgxb-auth-token"
//   );
//   if (value) {
//     dispatch(setSignIn(value));
//   } else {
//   }
// };
// fetchSession();
//dispatch(authListener());
