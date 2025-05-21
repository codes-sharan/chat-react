import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Rocket,
  Shield,
  Mail,
  MessageSquare,
  Github,
  Twitter,
  Linkedin,
  Building,
  BookOpen,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features", icon: Rocket },
        { name: "Security", href: "/security", icon: Shield },
        { name: "Pricing", href: "/pricing", icon: MessageSquare },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about", icon: Building },
        { name: "Blog", href: "/blog", icon: BookOpen },
        { name: "Contact", href: "/contact", icon: Phone },
      ],
    },
  ];

  return (
    <footer
      className={cn(
        "border-t bg-background/95 backdrop-blur",
        "supports-[backdrop-filter]:bg-background/60 mt-24"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SP-Chat
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Secure communication for modern teams and individuals.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Stay Updated
            </h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} SP-Chat. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { Separator } from "@/components/ui/separator";

// export default function Footer() {
//   return (
//     <footer className="w-full mt-[100px] mb-[50px] bg-muted py-6 px-4">
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         <div className="flex items-center gap-2">
//           <img src="/logo.svg" alt="SP-Chat Logo" className="h-8 w-8" />
//           <span className="font-semibold text-lg tracking-tight">SP-Chat</span>
//         </div>
//         <Separator className="my-2 md:hidden" />
//         <div className="flex items-center gap-6 text-muted-foreground">
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-primary transition-colors"
//             aria-label="GitHub"
//           >
//             <FaGithub size={22} />
//           </a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-primary transition-colors"
//             aria-label="Twitter"
//           >
//             <FaTwitter size={22} />
//           </a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-primary transition-colors"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin size={22} />
//           </a>
//         </div>
//       </div>
//       <Separator className="my-4" />
//       <div className=" mx-auto text-xs text-center text-muted-foreground">
//         © {new Date().getFullYear()} SP-Chat. All rights reserved.
//       </div>
//     </footer>
//   );
// }
