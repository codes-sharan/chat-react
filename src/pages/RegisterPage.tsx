import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { UserPlus, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      alert(data.error || "Registration failed");
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
            Get Started
          </h2>
          <p className="text-gray-600 mt-2">Create your SP-Chat account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <Input
              name="name"
              placeholder="Suyog Sharma"
              value={form.name}
              onChange={handleChange}
              className="focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
            <UserPlus className="w-4 h-4 mr-2" />
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:underline"
          >
            Sign in
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
//           Create your account
//         </h2>
//         <p className="text-center text-gray-500 mb-8">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Login
//           </a>
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 mb-1" htmlFor="name">
//               Name
//             </label>
//             <Input
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               onChange={handleChange}
//               value={form.name}
//               required
//               autoComplete="name"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1" htmlFor="email">
//               Email
//             </label>
//             <Input
//               id="email"
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               value={form.email}
//               required
//               autoComplete="email"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1" htmlFor="password">
//               Password
//             </label>
//             <Input
//               id="password"
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleChange}
//               value={form.password}
//               required
//               autoComplete="new-password"
//             />
//           </div>
//           <Button type="submit" className="w-full">
//             Register
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
