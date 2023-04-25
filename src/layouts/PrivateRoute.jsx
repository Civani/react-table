/*
 * This will check whether the user is authenticated
 * if not it will not allow the use to access the route
 */

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const authState = (state) => state.auth;

function PrivateRoute() {
  const navigate = useNavigate();
  const { user } = useSelector(authState);
  useEffect(() => {
    console.log("user", user);
    if (!user) {
      return navigate("/auth");
    }
  }, [user]);
  return user?.isAdmin ? <Outlet /> : <Navigate to="/auth" replace={true} />;
}

export default PrivateRoute;
