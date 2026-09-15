import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Price from './page/Price'
import Service from './page/Service'
import ResidentialHome from './service/residential/Service-Home'
import ResidentialVillas from './service/residential/Villas'
import ResidentialApartments from './service/residential/Apartments'
import ResidentialConstruction from './service/residential/ResidentialConstruction'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/residential" element={<ResidentialConstruction />} />
        <Route path="/services/residential/home" element={<ResidentialHome />} />
        <Route path="/services/residential/villas" element={<ResidentialVillas />} />
        <Route path="/services/residential/apartments" element={<ResidentialApartments />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
