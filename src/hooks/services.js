import { supabase } from "../config/initSupabase";

export async function fetchServicesCategory() {
  const { data, error } = await supabase
    .from("services_category")
    .select("*")
    .is("parent_id", null);

  if (error) throw error;
  if (data) return data;
}
export async function fetchServicesOffered() {
  const { data, error } = await supabase
    .from("services_offered")
    .select("*, services_category(*)");
  if (error) throw error;
  if (data) return data;
}
