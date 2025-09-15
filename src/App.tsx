import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Contact from "./pages/ContactPage"; // your new page file
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Toaster } from "./components/ui/sooner";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Industries />
                </>
              }
            />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <Toaster />
      </div>
    </Router>
  );
}
