// lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getToken = () => localStorage.getItem("token");

export const fetchUsers = async () => {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}/api/users`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const fetchMessages = async (id: string) => {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}/api/chat/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to fetch messages");
  return res.json();
};
