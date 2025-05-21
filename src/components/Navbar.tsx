import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageSquare,
  User,
  LayoutDashboard,
  MessagesSquare,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur",
        "supports-[backdrop-filter]:bg-background/60 px-4 md:px-8"
      )}
    >
      <div className="flex h-16 items-center justify-between">
        {/* Left Side - Logo */}
        <motion.div whileHover={{ scale: 0.95 }}>
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SP-Chat
            </span>
          </Link>
        </motion.div>

        {/* Right Side - Navigation */}
        <div className="flex items-center gap-4">
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            // {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 hover:bg-accent/50"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} />
                      <AvatarFallback>
                        {user.name?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:block">{user.name}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/chat" className="flex items-center gap-2">
                    <MessagesSquare className="h-4 w-4" />
                    Chat
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2">
              <Button asChild variant="outline">
                <Link to="/register" className="hidden sm:block">
                  Register
                </Link>
              </Button>
              <Button asChild>
                <Link to="/login">
                  Login
                  <ChevronDown className="ml-2 h-4 w-4 -rotate-90" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/context/auth-context";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

// export const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="p-4 border-b flex justify-between items-center bg-background">
//       <Link to="/" className="font-bold text-lg text-primary">
//         SP-Chat
//       </Link>
//       <div>
//         {user ? (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <div>
//                 <Button variant="ghost" className="text-muted-foreground">
//                   Hi {user.name}
//                 </Button>
//               </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem asChild>
//                 <Link to="/profile">Profile</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link to="/dashboard">Dashboard</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link to="/chat">Chat</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         ) : (
//           <Button asChild>
//             <Link to="/login">Login</Link>
//           </Button>
//         )}
//       </div>
//     </nav>
//   );
// };
