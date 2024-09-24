import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section>
        <div className="about p-5">
          <div className="container">
            <div className="row g-2">
              <div className="col-lg-6 col-sm-12 text-center">
                <h5>Ahmed Gamhody</h5>
                {/* <!-- <img
                  src="photos/PicsArt_01-30-12.37.29.jpg"
                  alt=""
                  className="about-image"
                /> --> */}
                <div className="image-container">
                  <img
                    src={require("../photos/PicsArt_01-30-12.37.29.jpg")}
                    alt=""
                    className="about-image"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
                <h3 className="head-shape">About me</h3>
                <p>
                  I'm Egyptian, I'm 20 years old, I currently work independently
                  as a fullstack, UX|UI designer and video game designer.
                </p>
                <p>
                  I currently have a video game studio where I spend my time
                  mixing ideas from all my work to generate quality stories that
                  everyone can enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
