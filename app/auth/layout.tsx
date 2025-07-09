// app/auth/layout.tsx
import "../globals.css";

import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
