import { Link } from "react-router-dom";

function SuccessRegister() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-md">
        <h1>Register Success</h1>
        <Link
          to="/login"
          className="text-center p-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default SuccessRegister;
