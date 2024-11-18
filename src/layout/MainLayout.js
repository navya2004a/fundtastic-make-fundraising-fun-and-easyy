import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const MainLayout = ({
  children,
}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
