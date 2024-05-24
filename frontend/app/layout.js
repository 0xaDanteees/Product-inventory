import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Manager",
  description: "A simple inventory handler/manager where you can add/edit/delete products",
  icons: {
    icon: "/sm_logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <footer className="py-5">
          <div className="text-center text-sm">
            Copyright © All rights reserved |{" "}
            <a
              href="https://github.com/0xaDanteees"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              0xâDanteees
            </a>
          </div>
        </footer>
      </body>
    </html>

  );
}
