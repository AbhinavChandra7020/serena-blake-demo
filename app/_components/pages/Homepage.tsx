"use client"
import Session from "../Session";
import Fees from "../Fees";
import Header from "../Header";
import HeroSection from "../HeroSection";
import Services from "../Services";
import TherapistProfile from "../TherapistProfile"
import ImageQuote from "../ImageQuote";
import Footer from "../Footer";
import FAQ from "../FAQ";
import ContactForm from "../ContactForm"; // Add this import

export default function Homepage(){
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <TherapistProfile />
      <Services />
      <Fees />
      <Session />
      <FAQ />
      <div className = 'bg-honeydew'>
      <ContactForm />
      </div>
      <ImageQuote />
      <Footer />
    </div>
  )
}