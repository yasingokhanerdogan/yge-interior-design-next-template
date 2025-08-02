import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center p-8">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}
