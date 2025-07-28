'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import CombinedServiceSection from "./components/CombinedServiceSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestWork from "./components/LatestWork";
import Navbar from "./components/Navbar";
import PersonalExpertise from "./components/PersonalExpertise";
import ProcessSteps from "./components/ProcessSteps";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])
  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <PersonalExpertise isDarkMode={isDarkMode} />
    <CombinedServiceSection isDarkMode={isDarkMode} />
    <ProcessSteps isDarkMode={isDarkMode} />
    <LatestWork isDarkMode={isDarkMode} />
    <ContactForm isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}
