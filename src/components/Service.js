import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <section>
        <div className="service text-white p-5">
          <h3 className="head-shape m-auto">My services</h3>
          <div className="container">
            <div className="row d-flex justify-content-between pt-5">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="box mb-2 d-flex">
                  <div className="service-text">
                    <h4>PHOTOGRAPHY</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt doloremque excepturi sit odit impedit, voluptas.
                    </p>
                  </div>
                  <div className="image-container rounded-circle service-image ms-3">
                    <img
                      src={require("../photos/fluent_design-ideas-20-regular.png")}
                      alt="Photography"
                    />
                  </div>
                </div>
                <div className="box mb-2 d-flex">
                  <div className="service-text">
                    <h4>UI/UX DESIGN</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt doloremque excepturi sit odit impedit, voluptas.
                    </p>
                  </div>
                  <div className="image-container rounded-circle service-image ms-3">
                    <img
                      src={require("../photos/fluent_design-ideas-20-regular.png")}
                      alt="UI/UX Design"
                    />
                  </div>
                </div>
                <div className="box mb-2 d-flex">
                  <div className="service-text">
                    <h4>WEB DESIGN</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt doloremque excepturi sit odit impedit, voluptas.
                    </p>
                  </div>
                  <div className="image-container rounded-circle service-image ms-3">
                    <img
                      src={require("../photos/fluent_design-ideas-20-regular.png")}
                      alt="Web Design"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="box mb-2 d-flex">
                  <div className="image-container rounded-circle service-image me-3">
                    <img
                      src={require("../photos/fluent_design-ideas-20-regular.png")}
                      alt="Web Development"
                    />
                  </div>
                  <div className="service-text">
                    <h4>WEB DEVELOPMENT</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt doloremque excepturi sit odit impedit, voluptas.
                    </p>
                  </div>
                </div>
                <div className="box mb-2 d-flex">
                  <div className="image-container rounded-circle service-image me-3">
                    <img
                      src={require("../photos/fluent_design-ideas-20-regular.png")}
                      alt="3D Design"
                    />
                  </div>
                  <div className="service-text">
                    <h4>3D DESIGN</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt doloremque excepturi sit odit impedit, voluptas.
                    </p>
                  </div>
                </div>
                <div className="box mb-2 d-flex">
                  <div className="image-container rounded-circle service-image me-3">
                    <img
                      src={require("../photos/fluent_design-ideas-20-regular.png")}
                      alt="2D Design"
                    />
                  </div>
                  <div className="service-text">
                    <h4>2D DESIGN</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt doloremque excepturi sit odit impedit, voluptas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
