import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <section>
        <div className="portfolio p-5 text-light">
          <h3 className="head-shape m-auto">Portfolio</h3>
          <div className="container">
            <div className="row pt-5 g-0">
              <div className="col-md-4 col-lg-4">
                <div className="d-flex m-0">
                  <img
                    src={require("../photos/port/Rectangle 27.png")}
                    alt="Portfolio Image1"
                    className="img-fluid"
                  />
                  <div>
                    <img
                      src={require("../photos/port/Rectangle 28.png")}
                      alt="Portfolio Image2"
                      className="img-fluid"
                    />
                    <img
                      src={require("../photos/port/Rectangle 29.png")}
                      alt="Portfolio Image3"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <img
                  src={require("../photos/port/Rectangle 30.png")}
                  alt="Portfolio Image4"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-lg-4">
                <img
                  src={require("../photos/port/Rectangle 31.png")}
                  alt="Portfolio Image5"
                  className="img-fluid"
                />
                <div className="d-flex m-0 overflow-hidden">
                  <img
                    src={require("../photos/port/Rectangle 32.png")}
                    alt="Portfolio Image6"
                    className="img-fluid"
                  />
                  <img
                    src={require("../photos/port/Rectangle 33.png")}
                    alt="Portfolio Image7"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="d-flex m-0 overflow-hidden">
                  <img
                    src={require("../photos/port/Rectangle 35.png")}
                    alt="Portfolio Image8"
                    className="img-fluid"
                  />
                  <img
                    src={require("../photos/port/Rectangle 34.png")}
                    alt="PortfolioImage9"
                    className="img-fluid"
                  />
                </div>
                <img
                  src={require("../photos/port/Rectangle 36.png")}
                  alt="PortfolioImage10"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
