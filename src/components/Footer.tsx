import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full mt-[100px] mb-[50px] bg-muted py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="SP-Chat Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg tracking-tight">SP-Chat</span>
        </div>
        <Separator className="my-2 md:hidden" />
        <div className="flex items-center gap-6 text-muted-foreground">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
      <Separator className="my-4" />
      <div className=" mx-auto text-xs text-center text-muted-foreground">
        © {new Date().getFullYear()} SP-Chat. All rights reserved.
      </div>
    </footer>
  );
}
