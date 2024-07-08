import { Route, Routes } from "react-router-dom";
import GovtJob from "./pages/GovtJob";

import PrivetJob from "./pages/PrivetJob";

import TeacherJob from "./pages/TeacherJob";
import ItJob from "./pages/ItJob";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import About from './components/About';


function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/govtJob" element={<GovtJob />} />
        <Route path="/privetJob" element={<PrivetJob />} />
        <Route path="/teacherJob" element={<TeacherJob />} />
        <Route path="/itJob" element={<ItJob />} />
        {/* ============================================= */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<Blogs />} />
    
       

      </Routes>
    </div>
  );
}

export default App;
