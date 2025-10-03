import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NewEntry from "./pages/NewEntry";
import EditEntry from "./pages/EditEntry";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewEntry />} />
          <Route path="/edit/:id" element={<EditEntry />} />
        </Routes>
      </div>
    </Router>
  );
}