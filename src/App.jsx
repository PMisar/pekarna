import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import History from "./Components/History";
import Products from "./Components/Products";
import JobOffer from "./Components/JobOffer";
import Retailers from "./Components/Retailers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import PrivacyPolicy from "./Pages/PrivacyPolicyPage";
import CookiesPolicy from "./Pages/CookiesPage";
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Function to determine if Navbar should be hidden based on current route
  const shouldHideNavbar = () => {
    return (
      location.pathname === "/privacy-policy" ||
      location.pathname === "/cookies-policy"
    );
  };

  return (
    <div className="App">
      {!shouldHideNavbar() && <Navbar />}
      <Header />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function Home() {
  return (
    <>
      <About />
      <History />
      <Products />
      <JobOffer />
      <Retailers />
      <Contact />
    </>
  );
}

export default App;
