import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/loginAPI";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const users = await loginAPI.fetchUserByEmail(dataForm.email);

      if (!users || users.length === 0) {
        setError("Email tidak ditemukan");
        return;
      }

      const user = users[0];

      if (user.password !== dataForm.password) {
        setError("Password salah");
        return;
      }

      navigate("/");
    } catch (err) {
      if (err?.response) {
        setError(err.response.data?.message || "Login gagal");
      } else {
        setError(err?.message || "Login gagal");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Login to Your Account 🔐
      </h2>

      {error && (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
          <span className="text-red-600 me-2 text-lg">!</span>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}


