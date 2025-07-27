import { useState } from "react";
import { registerUser } from "../utils/api/users";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isAllFilled = () => {
    return name && email && password && confirmPassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validator.isEmail(email)) {
      setError("Invalid email");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      try {
        const res = await registerUser({ name, email, password });
        navigate("/success-register");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-md">
        <h1 className="text-2xl font-bold">Register</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded-md border border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 rounded-md border border-gray-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mt-[-0.5rem]">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-2 disabled:bg-gray-400"
            disabled={!isAllFilled()}
          >
            Register
          </button>
        </form>
        <Link to="/login" className="text-sm text-end text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
