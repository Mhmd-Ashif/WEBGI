import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Join from './pages/joinTeam/Join';
import Service from './pages/ourServices/Service';
import About from './pages/aboutUs/About';
import ScrollToTop from './ScroolToTop';
import LoginPage from './admin/login'; // Update import according to your file structure
import AdminDashboard from './admin/AdminDashboard';
import { AuthProvider, PrivateRoute } from './admin/AuthProviderWithPrivateRoute'; // Update import according to your file structure

function App() {
  return (
    <Router>
      <ScrollToTop>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/joinTeam" element={<Join />} />
            <Route path="/ourServices" element={<Service />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/*" element={<PrivateRoute 
            element={<AdminDashboard />} />} /> 
          </Routes>
        </AuthProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
