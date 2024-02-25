import React from "react";
import Navbar from "../components/header";
import Footer from "../components/footer";
import Routers from "../routes/Routers";
const Layout = () => {
  return( 
  <>
    <Navbar/>
    <main>
      <Routers/>
      
    </main>
  <Footer/>
  </>
  );
};

export default Layout;
