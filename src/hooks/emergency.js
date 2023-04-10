import { supabase } from "../config/initSupabase";

export async function fetchEmergencyType() {
  const { data, error } = await supabase.from("emergency_type").select("*");

  if (error) throw error;
  if (data) return data;
}
