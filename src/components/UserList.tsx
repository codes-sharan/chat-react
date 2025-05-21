// components/UserList.tsx
import { User } from "@/types/chat";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface UserListProps {
  users: User[];
  selectedUser: User | null;
  onSelectUser: (user: User) => void;
}

export function UserList({ users, selectedUser, onSelectUser }: UserListProps) {
  return (
    <Card className="w-1/3 min-w-[300px]">
      <CardHeader>
        <CardTitle>Chats</CardTitle>
      </CardHeader>
      <ScrollArea className="h-[600px]">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user)}
            className={`flex items-center p-4 hover:bg-accent cursor-pointer ${
              selectedUser?.id === user.id ? "bg-accent" : ""
            }`}
          >
            <Avatar className="mr-4">
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">
                {user.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </Card>
  );
}
