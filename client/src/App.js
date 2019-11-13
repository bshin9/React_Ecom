import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/Navbar.css";
import "./css/Homepage.css";
import "./css/Productpage.css";
import "./css/Contactpage.css";
import "./css/Footer.css";
import "./css/Video.css";
import "./css/EditComment.css";


// Using the router to route the Home, Product, and Contact pages together
// Calling the Navbar and Footer so we don't have to repeat in the other pages
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
