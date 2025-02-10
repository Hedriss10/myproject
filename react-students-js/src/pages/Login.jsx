import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const userListForm = [{ id: 1, name: "Alex", password: "123@mudar" }];

const InfoSuccess = ({ text }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-mono bg-blend-color-blend">{text}</h1>
    </div>
  );
};

const processingLogin = (username, password) => {
  if (username === userListForm[0].name && password === userListForm[0].password) {
    return { success: true, message: `Welcome ${userListForm[0].name}` };
  } else {
    return { success: false, message: `Invalid username or password` };
  }
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = processingLogin(username, password);
    setMessage(result.message);
    if (result.success) {
      navigate("/home");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-mono mb-6">Login System with React</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-left mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {message && <div className="mt-4">{message}</div>}
      </div>
    </div>
  );
};

export default Login;