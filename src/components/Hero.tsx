import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { ArrowRight, MessageSquare, Shield, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const { user } = useAuth();

  return (
    <section className="bg-gradient-to-b from-blue-50/50 to-indigo-50/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Connect and Chat Seamlessly with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SP-Chat
              </span>
            </h1>

            <p className="text-lg text-gray-600 md:pr-8">
              Secure, real-time messaging platform that brings people together.
              Collaborate, share, and connect with your network effortlessly.
            </p>

            <div className="flex flex-wrap gap-4">
              {user ? (
                <Button asChild>
                  <Link to="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild>
                    <Link to="/signup">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/features">Learn More</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">
                  End-to-End Encryption
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Real-Time Messaging</span>
              </div>
              <div className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Smart Connections</span>
              </div>
            </div>
          </div>

          {/* Right Content - Chat Preview */}
          <div className="relative rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl" />

            <div className="relative space-y-4">
              {/* Chat Bubble 1 */}
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-600" />
                <div className="max-w-[70%] bg-gray-100 p-4 rounded-2xl">
                  <p className="text-sm">
                    Hey! Just wanted to share those project files...
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">
                    2:34 PM
                  </span>
                </div>
              </div>

              {/* Chat Bubble 2 */}
              <div className="flex gap-3 justify-end">
                <div className="max-w-[70%] bg-blue-600 text-white p-4 rounded-2xl">
                  <p className="text-sm">
                    Got them! I'll review and send feedback by EOD.
                  </p>
                  <span className="text-xs text-blue-100 mt-1 block">
                    2:35 PM
                  </span>
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-200" />
              </div>

              {/* Typing Indicator */}
              <div className="flex items-center gap-2 text-gray-500">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Link } from "react-router-dom";
// import { MessageCircle, LogIn } from "lucide-react";

// const Hero: React.FC = () => {
//   return (
//     <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md p-8">
//       <div className="flex items-center gap-3 mb-4">
//         <span className="text-4xl font-bold text-indigo-700">SP-Chat</span>
//         <Badge
//           variant="outline"
//           className="text-green-600 border-green-400 bg-green-50"
//         >
//           Online
//         </Badge>
//       </div>
//       <p className="text-lg text-gray-700 mb-6 max-w-xl text-center">
//         Welcome to{" "}
//         <span className="font-semibold text-indigo-600">SP-Chat</span> — your
//         secure and simple chat platform.
//         <br />
//         Login to see who&apos;s online and start chatting instantly!
//       </p>
//       <div className="flex gap-4">
//         <Link to="/login">
//           <Button size="lg" className="flex items-center gap-2">
//             <LogIn className="w-5 h-5" />
//             Login
//           </Button>
//         </Link>
//         <Link to="/chat">
//           <Button
//             variant="outline"
//             size="lg"
//             className="flex items-center gap-2"
//           >
//             <MessageCircle className="w-5 h-5" />
//             Chat
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Hero;
