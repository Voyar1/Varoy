import Footer from "@/compontents/shared/footer/footer";
import Nav from "@/compontents/shared/navigation/nav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
