import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./pages/ContactPage";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Toaster } from "./components/ui/sooner";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
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
