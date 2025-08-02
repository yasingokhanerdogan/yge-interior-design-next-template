import { Metadata } from "next";

export const metadata: Metadata = {};

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">HomePage</h1>
      </div>
    </div>
  );
}
