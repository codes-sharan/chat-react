import { useEffect, useRef } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Message } from "@/types/chat";

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
}

export function MessageList({ messages, currentUserId }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea className="flex-1 mb-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender.id === currentUserId
              ? "justify-end"
              : "justify-start"
          } mb-4`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.sender.id === currentUserId
                ? "bg-primary text-primary-foreground"
                : "bg-accent"
            }`}
          >
            <p>{message.message}</p>
            <p className="text-xs mt-1 opacity-70">
              {new Date(message.time).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
      <div ref={scrollRef} />
    </ScrollArea>
  );
}

// // components/MessageList.tsx
// import { Message } from "@/types/chat";
// import { ScrollArea } from "./ui/scroll-area";

// interface MessageListProps {
//   messages: Message[];
//   currentUserId: string;
// }

// export function MessageList({ messages, currentUserId }: MessageListProps) {
//   return (
//     <ScrollArea className="flex-1 mb-4">
//       {messages.map((message) => (
//         <div
//           key={message.id}
//           className={`flex ${
//             message.sender.id === currentUserId
//               ? "justify-end"
//               : "justify-start"
//           } mb-4`}
//         >
//           <div
//             className={`max-w-[70%] rounded-lg p-3 ${
//               message.sender.id === currentUserId
//                 ? "bg-primary text-primary-foreground"
//                 : "bg-accent"
//             }`}
//           >
//             <p>{message.message}</p>
//             <p className="text-xs mt-1 opacity-70">
//               {new Date(message.time).toLocaleTimeString()}
//             </p>
//           </div>
//         </div>
//       ))}
//     </ScrollArea>
//   );
// }
