"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="rounded-full bg-destructive/10 p-6 mb-8 animate-pulse">
        <AlertTriangle className="h-12 w-12 text-destructive" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif text-foreground mb-4">
        Something went wrong!
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
        We encountered an unexpected error while trying to process your request. Please try again or return to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Button onClick={() => reset()} size="lg" className="gap-2 w-full sm:w-auto">
          <RefreshCcw className="h-4 w-4" />
          Try Again
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
