import React from "react";
import StickyNavbar from "../components/header";
import Footer from "../components/footer";
import Routers from "../routes/Routers";
const Layout = () => {
  return (
    <>
      <StickyNavbar />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
