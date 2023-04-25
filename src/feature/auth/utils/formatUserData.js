export const formatUserData = (data) => {
  const dataTobeStored = {
    id: data.id,
    email: data.email,
    phone: data.phone,
    name: data.user_metadata.full_name,
    isAdmin: data.app_metadata.claims_root_admin,
    lastSignIn: data.last_sign_in_at,
  };
  return dataTobeStored;
};
