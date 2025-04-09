// src/components/Layout.jsx
import React from "react";
import FooterSection from "./GlobalComponent/FooterSection"; // optional if footer is also persistent
// import Header from "./Header"; // optional if header is also persistent

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col  transition-colors">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;
