import React from "react";
import Navbar from "../patterns/Navbar";
import CardSession from "../sessions/Organizze/CardSession";
import Contact from "../sessions/Organizze/ContactUs/Contact";
import CTASession from "../sessions/Organizze/CTASession";
import Footer from "../sessions/Organizze/Footer/Footer";
import Hero from "../sessions/Organizze/Hero";
import InfoSesison from "../sessions/Organizze/InformationsSession/InfoSesison";
import InfoSession02 from "../sessions/Organizze/InformationsSession/InfoSession02";

const Organizze = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardSession />
      <CTASession />
      <InfoSesison />
      <InfoSession02 />
      <Contact />
      <Footer />
    </div>
  );
};

export default Organizze;
