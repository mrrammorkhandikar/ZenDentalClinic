import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import CSS
import './App.css'

// Layout Component
import Layout from './components/layout/Layout'

// Page Components
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import ServicesPage from './components/services/ServicesPage'
import ContactPage from './components/contact/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
