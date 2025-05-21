const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { LogIn, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const { token } = await res.json();
      localStorage.setItem("token", token);

      navigate("/");
    } catch (err) {
      console.log("login failed: ", err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50"
      >
        <div className="flex flex-col items-center mb-8">
          <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-600 mt-2">Sign in to continue to SP-Chat</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className="focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          New to SP-Chat?{" "}
          <a
            href="/register"
            className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:underline"
          >
            Create account
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Sign in to your account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Email
//             </label>
//             <Input
//               id="email"
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               autoComplete="email"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <Input
//               id="password"
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               autoComplete="current-password"
//             />
//           </div>
//           <Button type="submit" className="w-full">
//             Login
//           </Button>
//         </form>
//         <div className="mt-6 text-center">
//           <span className="text-gray-600">Don't have an account? </span>
//           <a
//             href="/register"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Register
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
