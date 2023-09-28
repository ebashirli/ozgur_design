import About from "./components/about/About";
import Cta from "./components/cta/Cta";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Reputation from "./components/reasons/Reputation";
import Services from "./components/services/Services";
// import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reputation />
      <About />
      <Services />
      {/* <Stats /> */}
      <Cta />
    </>
  );
}

export default App;
