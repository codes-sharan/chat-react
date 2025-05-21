// types/chat.ts
export interface Message {
  id: string;
  message: string;
  sender: { id: string; name: string };
  receiver: { id: string; name: string };
  time: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  online?: boolean;
  avatar?: string;
}
