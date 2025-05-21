// components/ChatInterface.tsx
import { useState, useEffect } from "react";
import { UserList } from "./UserList";
import { ChatWindow } from "./ChatWindow";
import { useSocket } from "@/context/socket-context";
import { Message, User } from "@/types/chat";
import { fetchMessages, fetchUsers } from "@/lib/api";
import { useAuth } from "@/context/auth-context";
import { LoadingScreen } from "./LoadingScreen";

export default function ChatInterface() {
  const { socket } = useSocket();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useAuth();
  // console.log("user in chatinterface: ", user);

  // In ChatInterface.tsx
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser || !socket) return;

    const messageData = {
      receiverId: selectedUser.id,
      message: newMessage,
      tempId: Date.now().toString(),
    };

    if (!user) {
      return <LoadingScreen message="Authenticating..." />;
    }

    // Optimistic update
    setMessages((prev) => [
      ...prev,
      {
        id: messageData.tempId,
        message: newMessage,
        sender: { id: user.id, name: "Me" },

        receiver: { id: selectedUser.id, name: selectedUser.name },
        time: new Date(),
      },
    ]);

    socket.emit("send_message", messageData);
    setNewMessage("");
  };

  // Fetch users with error handling
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data.users);
      } catch {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  // Socket initialization
  useEffect(() => {
    if (!socket) return;

    const messageHandler = (message: Message) => {
      if (
        message.sender.id === selectedUser?.id ||
        message.receiver.id === selectedUser?.id
      ) {
        setMessages((prev) => [...prev, message]);
      }
    };

    socket.on("receive_message", messageHandler);
    return () => {
      socket.off("receive_message", messageHandler);
    };
  }, [socket, selectedUser]);

  // Fetch chat history when a user is selected
  useEffect(() => {
    const loadMessages = async () => {
      if (!selectedUser) return;
      try {
        const data = await fetchMessages(selectedUser.id);
        if (data.success) {
          setMessages(data.messages);
        }
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    loadMessages();
  }, [selectedUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full w-full text-red-500">
        {error}
      </div>
    );
  }

  if (!user) {
    return <LoadingScreen message="Authenticating user..." />;
  }

  return (
    <div className="flex h-[calc(100vh-80px)] max-w-7xl mx-auto p-4 gap-4">
      <UserList
        users={users}
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
      />

      <ChatWindow
        selectedUser={selectedUser}
        messages={messages}
        currentUserId={user.id} // Replace with actual ID from auth
        newMessage={newMessage}
        onMessageChange={setNewMessage}
        onSendMessage={() => {
          if (!newMessage.trim() || !selectedUser) return;
          handleSendMessage();
        }}
      />
    </div>
  );
}
