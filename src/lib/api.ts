// lib/api.ts
const API_BASE = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

export const fetchUsers = async () => {
  const token = getToken();
  const res = await fetch(`${API_BASE}/api/users`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const fetchMessages = async (id: string) => {
  const token = getToken();
  const res = await fetch(`${API_BASE}/api/chat/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Failed to fetch messages");
  return res.json();
};
