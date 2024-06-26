import About from "./components/about/About";
// import Consultation from "./components/consultation/Consultation";
// import Cta from "./components/cta/Cta";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/projects/Services";
// import Reputation from "./components/reasons/Reputation";
// import Services from "./components/services/Services";
// import Stats from "./components/stats/Stats";
import Footer from "./components/footer/Footer";
import Bottom from "./components/bottom/Bottom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Bottom />
      <Footer />
    </>
  );
}

export default App;
