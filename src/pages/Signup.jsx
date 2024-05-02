import { useState } from "react";
import supabase from "../supabase";
import { createUser } from "../Api";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function Signup() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [address, setAddress] = useState("");

  // const [user, setUser] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("newUser created sucessfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
    // const newUser = {
    //   name,
    //   email,
    //   password,
    //   phoneNumber,
    //   address,
    // };
    // setUser((prevUsers) => [...prevUsers, newUser]);
    // console.log(newUser);
    // alert(`${user.name} account has been created successfully `);
    // setUser(async (newUser) => {
    //   const { data, error } = await supabase.from("users").insert(newUser);
    //   alert(`${user.name} account has been created successfully `);
    //   if (error) {
    //     throw new Error("new user was not created");
    //   }
    // });
    // setName("");
    // setEmail("");
    // setPassword("");
    // setPhoneNumber("");
    // setAddress("");
    //
  }

  return (
    <div className="signup-cont">
      <div className="slider-cont">slider</div>
      <div className="form-cont">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name :</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              {...register("name")}
              required
            />
          </div>

          <div>
            <label>Email :</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              {...register("email")}
              required
            />
          </div>
          <div>
            <label>Password :</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register("password")}
              required
            />
          </div>

          <div>
            <label>Phone No :</label>
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              {...register("phone")}
              required
            />
          </div>
          <div>
            <label>House Address :</label>
            <input
              type="text"
              placeholder="Address"
              id="address"
              {...register("address")}
              required
            />
          </div>
          <button disabled={isLoading}>Submit</button>
        </form>
        <p className="signup-text">
          Already have an account?
          <span>
            <a href="/">Login</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
