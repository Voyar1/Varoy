import Nav from "@/compontents/shared/navigation/nav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Nav />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
