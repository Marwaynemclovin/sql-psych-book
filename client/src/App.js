import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import Psychologists from "./components/Psychologists/Psychologists";
import Services from "./components/Services/Services";
import GetMatched from "./pages/Matched";
import Book from "./pages/Book";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<div>
            <Navbar />
            <Hero />
            <Information />
            <Psychologists />
            <Services />
            <Footer />
          </div>} />
          <Route path="/get-matched" element={<div>
            <Navbar />
            <GetMatched />
          </div>} />
          <Route path="/book" element={<div>
            <Navbar />
            <Book />
          </div>} />
          <Route path="/login" element={<div>
            <Login />
          </div>} />
          <Route path="/signup" element={<div>
            <SignUp />
          </div>} />
          <Route path="/profile" element={<div>
            <Profile />
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
