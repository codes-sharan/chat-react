import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils"; // ShadCN utility for className merging (optional)

interface LoadingScreenProps {
  message?: string;
  error?: string;
  className?: string;
}

export function LoadingScreen({
  message = "Loading...",
  error,
  className,
}: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-screen text-center",
        className
      )}
    >
      <Loader2 className="h-8 w-8 animate-spin text-gray-600 dark:text-gray-300 mb-4" />
      <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
        {error ? <span className="text-red-500">⚠️ {error}</span> : message}
      </p>
    </div>
  );
}
