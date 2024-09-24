import React, { Component } from "react";
import "../index.css";
import CV from "../photos/ahmed shaban saad Front End Developer.pdf";
export default class Header extends Component {
  render() {
    return (
      <div className="lan-page position-relative">
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#.">
              <h4 className="logo text-white">
                Beans <span className="main-shape">Studios</span>
              </h4>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main"
              aria-controls="main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="main">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link p-2 p-lg-3 active"
                    aria-current="page"
                    href="#."
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-2 p-lg-3" href="#.">
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-2 p-lg-3" href="#.">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-2 p-lg-3" href="#.">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-2 p-lg-3" href="#.">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-2 p-lg-3" href="#.">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section>
          <div className="home">
            <div className="container">
              <div className="row px-sm-2">
                <div className="col-6 d-flex flex-column justify-content-center">
                  <span className="main-color">Hello, i’m</span>
                  <h1>Mr. GAM</h1>
                  <p>FULL-STACK DEVELOPER | UX/UI DESIGNER | FREELANCER</p>
                  <div className="social-icons">
                    <div className="icons">
                      <a
                        className="facebook"
                        href="https://web.facebook.com/Gamhody159"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        className="instagram"
                        href="https://www.instagram.com/ahmed_s_gamhody/"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        className="twitter"
                        href="https://twitter.com/ahmedgamhody"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/ahmed-shaban-gamhody-b26390239/"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a
                        className="github"
                        href="https://github.com/ahmedgamhody"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <button type="button" className="btn btn-warning main-color">
                    <a
                      href={CV}
                      download="ahmed_shaban_saad_Front_End_Developer.pdf"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Download CV
                    </a>
                  </button>
                </div>
                <div className="col-6 text-center position-relative lan-image">
                  <img
                    src={require("../photos/1.png")}
                    alt="logo"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
