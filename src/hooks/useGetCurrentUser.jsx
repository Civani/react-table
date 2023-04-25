import { supabase } from "../config/supabaseClient";

const useGetCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw error;
    }
    if (data) {
      return data;
    }
  } catch (error) {
    return error;
  }
};
export default useGetCurrentUser;
