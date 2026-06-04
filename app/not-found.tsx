import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="rounded-full bg-primary/10 p-6 mb-8">
        <FileQuestion className="h-12 w-12 text-primary" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif text-foreground mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
        Oops! We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
      </p>
      <Button asChild size="lg" className="gap-2">
        <Link href="/">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </main>
  );
}
