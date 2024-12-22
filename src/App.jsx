import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import { Project } from './Components/Projects';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
