import Nav from "@/components/navigation/Nav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Nav />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
