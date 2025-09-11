import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Toaster } from "./components/ui/sooner";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Industries />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}