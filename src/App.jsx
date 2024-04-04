import Header from "./Components/Header";
import About from "./Components/About";
import History from "./Components/History";
import Products from "./Components/Products";
import JobOffer from "./Components/JobOffer";
import Retailers from "./Components/Retailers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <History />
      <Products />
      <JobOffer />
      <Retailers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
