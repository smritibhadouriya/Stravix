import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Mainpage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white/80">
      {/* Fixed Navbar */}
      <header className=" w-full z-50 bg-white">
        <Navbar />
      </header>

      {/* Main Content - Starts below navbar */}
      <main className="flex-1 pb-"> {/* Adjust pt-16 based on navbar height */}
        <Outlet />
      </main>

      {/* Footer - Pushed to bottom */}
      <footer className="w-full bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Mainpage;