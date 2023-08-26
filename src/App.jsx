import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (

    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
