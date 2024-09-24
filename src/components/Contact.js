import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section>
        <div className="contact p-5">
          <div className="container">
            <h3 className="head-shape text-light text-center">GET IN TOUCH</h3>
            <div className="contact-contant">
              <div className="row d-flex justify-content-around g-2">
                <div className="col-lg-4 col-sm-12 mb-md-4">
                  <div className="row g-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    className="form-control mt-3 mb-3 rounded-pill"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  <textarea
                    className="form-control rounded"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                  <button
                    type="button"
                    className="btn btn-warning main-color mt-3 rounded-pill w-50 m-auto d-block"
                  >
                    Send
                  </button>
                </div>
                <div className="col-lg-4 col-sm-12 main-color rounded p-3">
                  <h4>CONTACT INFO</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro fugit cum doloremque provident laboriosam iure.
                  </p>
                  <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>
                      Address:
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit, numquam.
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-envelope"></i>
                    <p>
                      Email:
                      <br />
                      <a
                        className="text-light"
                        href="mailto:ahmedgamhody1@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ahmedgamhody1@gmail.com
                      </a>
                      <br />
                      <a
                        className="text-light"
                        href="mailto:ahmedgamhody1@outlook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ahmedgamhody1@outlook.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <i className="fa-solid fa-phone"></i>
                    <p>
                      Phone:
                      <a className="text-light" href="tel:+201114026722">
                        +201114026722
                      </a>
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
