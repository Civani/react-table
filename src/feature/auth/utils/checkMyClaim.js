const checkMyClaim = async (supabase) => {
  try {
    let { data, error } = await supabase.rpc("get_my_claims");
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    return err;
  }
};

export default checkMyClaim;
