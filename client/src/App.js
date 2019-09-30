import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Productpage.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Product} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    );
  }
}

export default App;
