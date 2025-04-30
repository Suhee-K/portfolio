import "devextreme/dist/css/dx.fluent.saas.light.css";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Nav from "./components/Nav";
import Experience from "./sections/Experience";
import config from "devextreme/core/config";
import { licenseKey } from "./devextreme-license";
import Footer from "./components/Footer";
import Awards from "./sections/Awards";
import Skills from "./sections/Skills";

function App() {
  config({
    licenseKey: licenseKey,
  });

  return (
    <div className="App">
      <Nav />
      <div className="">
        <section id="home">
          <Hero />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="experiences">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="awards">
          <Awards />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
