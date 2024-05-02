import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { findEmail } from "../Api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: findEmail,
    onSuccess: () => {
      toast.success("Login sucessfull ");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("main");
    },
  });

  function handleLogin(data) {
    mutate(data);
  }

  return (
    <div className="login-cont">
      <div className="loginform-cont">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label>Email :</label>
            <input type="email" placeholder="Email" id="email" {...register} />
          </div>

          <div>
            <label>Password :</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register}
            />
          </div>
          <button disabled={isLoading}>Submit</button>
        </form>
        <p className="login-text">
          You don't have an account?
          <span>
            <a href="signup">Sign up</a>
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
