import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../config/supabaseClient";
// import { NavLink } from 'react-router-dom';
import { FiEyeOff, FiEye } from "react-icons/fi";
import BasicSpinner from "../../../../components/BasicSpinner/BasicSpinner";

// redux-store --
import { useDispatch } from "react-redux";
import { saveUser, setSession } from "../../slices/auth.slice";
import { formatUserData } from "../../utils/formatUserData";
// import { addNewUser } from "../../slices/auth.slice";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    setIsLoading(true);
    let { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (data.user) {
      const userDataToBeSaved = formatUserData(data.user);
      const sessionDataTobeSaved = { ...data.session };
      delete sessionDataTobeSaved.user;
      dispatch(saveUser(userDataToBeSaved));
      dispatch(setSession(sessionDataTobeSaved));
      navigate("/dashboard");
    }
    if (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="border-5 bottom-3 flex h-screen w-screen items-center justify-center">
        <div className="border-1 flex w-[400px] flex-col items-center rounded-md border border-black p-10">
          <h1 className="mb-8 text-2xl font-bold text-blue6">Sign In</h1>
          {error && <div className="text-red-500">{error}</div>}
          <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-4">
              {/* ----   Email  ---- */}
              <input
                {...register("email", {
                  required: "This feild is required *",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid e-mail address",
                  },
                })}
                type="email"
                placeholder="Email-id"
                className="w-full rounded-md border-2 border-gray3 px-2 py-1 text-lg text-gray5 outline-none "
              />
              {errors.email && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.email.message}{" "}
                </small>
              )}
            </div>

            {/* ----   Password  ---- */}
            <div className="mb-4">
              <div className=" flex w-full items-center justify-between rounded-md border-2 border-gray3 px-2 py-1 text-lg text-gray5">
                <input
                  {...register("password", {
                    required: "This feild is required *",
                    pattern: {
                      value:
                        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message:
                        " password requirements: (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                    },
                  })}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className=" outline-none "
                />
                <div
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="cursor-pointer text-lg text-gray5"
                >
                  {passwordVisible ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
              {errors.password && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.password.message}{" "}
                </small>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full flex-row justify-center gap-4 rounded-md border-0 bg-blue5  py-2 text-center font-semibold text-white hover:bg-blue6"
            >
              <div className="text-sm">
                {isLoading ? "Signing In" : "Sign In"}
              </div>
              {isLoading && (
                <BasicSpinner className="justify-items-end leading-[12px] text-zinc-100" />
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
