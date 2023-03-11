import React, { useEffect } from "react";
import { supabase } from "../config/initSupabase";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useDispatch, useSelector } from "react-redux";

import { setSignIn, setSignOut, authListener } from "../redux/action/authSlice";
export default function RootNavigation() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(authListener());

    // const { data: authListener } = supabase.auth.onAuthStateChange(
    //   (_event, session) => {
    //     switch (_event) {
    //       // case "SIGNED_IN":
    //       //   dispatch(setSignIn(session.user));
    //       //   break;
    //       case "SIGNED_OUT":
    //         console.log("log out boss");
    //         dispatch(setSignOut());
    //         break;
    //       default:
    //     }
    //   }
    // );
    // return () => {
    //   authListener.unsubscribe();
    // };
  }, []);

  return auth ? <MainStack /> : <AuthStack />;
}
