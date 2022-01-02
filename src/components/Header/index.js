import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';

class Header extends React.Component {
  render() {
    return (
        <div>
            <header>
                <Navigation />
            </header>

        <div className="content">
        <Routes>
            <Route exact path="/" element={<Navigate to="/about" replace/>} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
        </div>
    </div>
    );
  }
}

export default Header;