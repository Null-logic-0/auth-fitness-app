import Header from "@/components/auth-header";
import "../globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
