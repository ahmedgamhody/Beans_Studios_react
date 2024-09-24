import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfoilo";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Project from "./components/Project";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Service />
        <Portfolio />
        <Blog />
        <Contact />
        <Testimonial />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default App;
