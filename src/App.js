import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/services" element={<Services />}/>
      <Route exact path="/projects" element={<Projects />}/>
      <Route exact path="/careers" element={<Careers />}/>
      <Route exact path="/contactus" element={<ContactUs />}/>
    </Routes>
  );
}

export default App;
