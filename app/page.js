'use client'
import About from "./components/About";
import CombinedServiceSection from "./components/CombinedServiceSection";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PersonalExpertise from "./components/PersonalExpertise";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <PersonalExpertise />
    <CombinedServiceSection />
    </>
  );
}
