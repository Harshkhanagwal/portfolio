  import { BrowserRouter, Routes, Route } from "react-router-dom";

  import "./Style/App.css";
  import "./Style/index.css";
  import "./Style/Typography.css";
  import "./Style/form.css";

  import HeroSection from "./components/HeroSection/HeroSection";
  import Navbar from "./components/Navbar/Navbar";
  import AboutSection from "./components/AboutSection/AboutSection";
  import Cursor from "./components/Cursor/Cursor";
  import Skill2 from "./components/Skills/Skills2";
  import Projects from "./components/ProjectsSection/ProjectsSection";
  import Personal from "./components/Personal/Personal";
  import Experience from "./components/ExperienceSection/Experience";
  import Contact from "./components/ContactSection/ContactSection";
  import Footer from "./components/Footer/Footer";

  import SmoothScroll from "./components/elements/SmoothScroll";
  import AdminApp from "./admin/adminApp";

  function Portfolio() {
    return (
      <>
        <SmoothScroll />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Skill2 />
        <Projects />
        <Personal />
        <Experience />
        <Contact />
        <Footer />
      </>
    );
  }

  function App() {
    return (
      <BrowserRouter>
        <Cursor />

        <Routes>
          <Route path="/" element={<Portfolio />} />

          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;