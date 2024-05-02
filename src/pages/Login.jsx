import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("main");
  };
  return (
    <div className="login-cont">
      <div className="loginform-cont">
        <h1>Login</h1>
        <form>
          <div>
            <label>Email :</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password :</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Submit</button>
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
