// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
// import About from "./Components/About";
// import History from "./Components/History";
// import Products from "./Components/Products";
// import JobOffer from "./Components/JobOffer";
// import Retailers from "./Components/Retailers";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
// import ScrollToTopButton from "./Components/ScrollToTopButton";
// import PrivacyPolicy from "./Pages/PrivacyPolicyPage";
// import CookiesPolicy from "./Pages/CookiesPage";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/privacy-policy" component={PrivacyPolicy} />
//           <Route path="/cookies-policy" component={CookiesPolicy} />
//           <Route path="/" exact />
//         </Routes>
//         <About />
//         <History />
//         <Products />
//         <JobOffer />
//         <Retailers />
//         <Contact />
//         <Footer />
//         <ScrollToTopButton />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
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
      <div className="App">
        <Header />
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
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
