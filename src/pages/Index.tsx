
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import AuthorSpotlight from "@/components/AuthorSpotlight";
import PublishingServices from "@/components/PublishingServices";
import SubmissionForm from "@/components/SubmissionForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isAnchor = target.tagName === 'A' && target.getAttribute('href')?.startsWith('#');
      
      if (isAnchor) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Offset for fixed header
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBooks />
        <AuthorSpotlight />
        <PublishingServices />
        <SubmissionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
