import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <section>
        <div className="blog p-5 text-light">
          <h3 className="head-shape m-auto">Blog</h3>
          <div className="container d-flex justify-content-center pt-5">
            <div className="d-flex-custom">
              <div className="d-flex">
                <img
                  src={require("../photos/blog/Rectangle 40.png")}
                  alt="Blog Image1"
                />
                <img
                  src={require("../photos/blog/Rectangle 41.png")}
                  alt="Blog Image2"
                />
                <img
                  src={require("../photos/blog/Rectangle 42.png")}
                  alt="Blog Image3"
                />
              </div>
              <div className="d-flex mt-100">
                <img
                  src={require("../photos/blog/Rectangle 38.png")}
                  alt="Blog Image4"
                />
                <img
                  src={require("../photos/blog/Rectangle 39.png")}
                  alt="Blog Image5"
                />
              </div>
              <div className="d-flex mt-100">
                <img
                  src={require("../photos/blog/Rectangle 37.png")}
                  alt="Blog Image6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
