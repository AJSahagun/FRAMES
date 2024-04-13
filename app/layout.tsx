import { noto_sans } from "./fonts";
import "./globals.css";
import NavBar from "./_components/landing-page/NavBar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FRAMES",
  description: "Facial Recognition Access Monitoring Enhanced System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className={`${noto_sans.className} antialiased min-h-screen flex flex-col items-center overflow-hidden`}>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
