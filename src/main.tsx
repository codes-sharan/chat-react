import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SocketProvider } from "./context/socket-context.tsx";
import { AuthProvider } from "./context/auth-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-[1200px] mx-auto">
        <SocketProvider>
          <App />
        </SocketProvider>
      </div>
    </AuthProvider>
  </StrictMode>
);
