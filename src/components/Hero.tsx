import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MessageCircle, LogIn } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl font-bold text-indigo-700">SP-Chat</span>
        <Badge
          variant="outline"
          className="text-green-600 border-green-400 bg-green-50"
        >
          Online
        </Badge>
      </div>
      <p className="text-lg text-gray-700 mb-6 max-w-xl text-center">
        Welcome to{" "}
        <span className="font-semibold text-indigo-600">SP-Chat</span> — your
        secure and simple chat platform.
        <br />
        Login to see who&apos;s online and start chatting instantly!
      </p>
      <div className="flex gap-4">
        <Link to="/login">
          <Button size="lg" className="flex items-center gap-2">
            <LogIn className="w-5 h-5" />
            Login
          </Button>
        </Link>
        <Link to="/chat">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
