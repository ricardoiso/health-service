import React from "react";
import Navbar from "../components/Navbar";
import { NotFoundSection } from "../components/NotFoundSection";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <NotFoundSection />
      <Footer />
    </div>
  );
}
