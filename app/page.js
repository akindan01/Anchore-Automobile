import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/data/faqs";
import Hero from "@/components/sections/Hero";
import FeaturedVehicles from "@/components/sections/FeaturedVehicles";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Statistics from "@/components/sections/Statistics";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

/* FAQPage structured data generated from the project's real FAQ content
   (data/faqs.js). No questions, answers or ratings are invented. */
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <Navbar />
      <main>
        <Hero />
        <FeaturedVehicles />
        <WhyChooseUs />
        <Services />
        <Gallery />
        <Testimonials />
        <Statistics />
        <Process />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
