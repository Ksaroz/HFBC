import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Events from './components/Events';
import SingleEvent from './components/SingleEvent';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Locations from './components/Locations';
import Give from './components/Give';
import Join from './components/Join';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/join'} element={<Join />} />
        <Route path={'/events'} element={<Events />} />
        <Route path={'/event'} element={<SingleEvent />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/locations'} element={<Locations />} />
        <Route path={'/give'} element={<Give />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
