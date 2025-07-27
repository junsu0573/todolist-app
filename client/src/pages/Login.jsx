import { useState } from "react";
import { loginUser } from "../utils/api/users";
import { useNavigate } from "react-router-dom";
import api from "../utils/api/api";
import validator from "validator";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const isAllFilled = () => {
    return email && password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validator.isEmail(email)) {
      setError("Invalid email");
    } else {
      try {
        const res = await loginUser({ email, password });
        setUser(res);
        sessionStorage.setItem("token", res.token);
        api.defaults.headers["Authorization"] = `Bearer ${res.token}`;
        navigate("/");
      } catch (error) {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded-md border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-md border border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-2 disabled:bg-gray-400"
            disabled={!isAllFilled()}
          >
            Login
          </button>
        </form>
        <Link to="/register" className="text-sm text-end text-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
