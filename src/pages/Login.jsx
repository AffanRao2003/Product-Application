import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Blue Box */}
      <div className="bg-blue-600 w-96 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-white text-2xl font-bold mb-6">
          Product Login Page
        </h1>

        <button
          onClick={handleLogin}
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
