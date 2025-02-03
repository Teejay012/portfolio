
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testtimonials";
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
