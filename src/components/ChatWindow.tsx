// components/ChatWindow.tsx
import { Message, User } from "@/types/chat";
import { MessageList } from "./MessageList";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useEffect, useRef } from "react";

interface ChatWindowProps {
  selectedUser: User | null;
  messages: Message[];
  currentUserId: string;
  newMessage: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
}

export function ChatWindow({
  selectedUser,
  messages,
  currentUserId,
  newMessage,
  onMessageChange,
  onSendMessage,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!selectedUser) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        Select a user to start chatting
      </div>
    );
  }

  return (
    <Card className="flex-1 flex flex-col">
      <CardHeader className="border-b">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{selectedUser.name}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {selectedUser.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col min-h-0 p-0">
        <div className="flex-1 overflow-y-auto p-4">
          <MessageList messages={messages} currentUserId={currentUserId} />
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => onMessageChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  onSendMessage();
                }
              }}
              placeholder="Type a message..."
            />
            <Button onClick={onSendMessage}>Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// // components/ChatWindow.tsx
// import { Message, User } from "@/types/chat";
// import { MessageList } from "./MessageList";
// import { Avatar, AvatarFallback } from "./ui/avatar";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Input } from "./ui/input";

// interface ChatWindowProps {
//   selectedUser: User | null;
//   messages: Message[];
//   currentUserId: string;
//   newMessage: string;
//   onMessageChange: (message: string) => void;
//   onSendMessage: () => void;
// }

// export function ChatWindow({
//   selectedUser,
//   messages,
//   currentUserId,
//   newMessage,
//   onMessageChange,
//   onSendMessage,
// }: ChatWindowProps) {
//   if (!selectedUser) {
//     return (
//       <div className="h-full flex items-center justify-center text-muted-foreground">
//         Select a user to start chatting
//       </div>
//     );
//   }

//   return (
//     <Card className="flex-1">
//       <CardHeader className="border-b">
//         <div className="flex items-center gap-4">
//           <Avatar>
//             <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
//           </Avatar>
//           <div>
//             <CardTitle>{selectedUser.name}</CardTitle>
//             <p className="text-sm text-muted-foreground">
//               {selectedUser.online ? "Online" : "Offline"}
//             </p>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="p-4 h-[600px] flex flex-col">
//         <MessageList messages={messages} currentUserId={currentUserId} />
//         <div className="flex gap-2">
//           <Input
//             value={newMessage}
//             onChange={(e) => onMessageChange(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !e.nativeEvent.isComposing) {
//                 onSendMessage();
//               }
//             }}
//             placeholder="Type a message..."
//           />
//           <Button onClick={onSendMessage}>Send</Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
