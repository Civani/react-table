import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { saveUser, setSession } from "./feature/auth/slices/auth.slice";
import { formatUserData } from "./feature/auth/utils/formatUserData";
import useGetCurrentUser from "./hooks/useGetCurrentUser";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    useGetCurrentUser()
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          // A Session was found
          // Format the user data
          const userDataTobeSaved = formatUserData(data.session.user);
          const sessionDataTobeSaved = { ...data.session };
          delete sessionDataTobeSaved.user;
          // Save the user data to the store
          dispatch(saveUser(userDataTobeSaved));
          dispatch(setSession(sessionDataTobeSaved));
          setIsLoading(false);
          navigate("/dashboard");
        } else {
          setIsLoading(false);
          navigate("/auth");
        }
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="App">{isLoading ? <h1>Loading...</h1> : <Outlet />}</div>
  );
}

export default App;
