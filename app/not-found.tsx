import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <h1 className="text-h1 text-text">Page not found</h1>
      <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted">
        That page is not here. It may have moved, or the link is out of date.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  );
}
