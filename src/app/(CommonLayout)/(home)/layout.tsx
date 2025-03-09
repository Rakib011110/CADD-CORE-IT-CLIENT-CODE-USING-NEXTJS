
import { ReactNode } from "react";

export default function CommonLayout({ children }: {children:ReactNode} ) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}