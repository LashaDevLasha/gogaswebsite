import React from "react";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "My Website",
  description: "A description of my website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: "0px" }}>{children}</main>
        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>  
  );
};

export default RootLayout;
