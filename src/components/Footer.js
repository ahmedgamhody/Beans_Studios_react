import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer p-4">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-4 col-sm-12 text-sm-center">
              <h3 className="text-light">Ahmed Shaban</h3>
              <p className="foot-color lh-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                totam, eaque temporibus eligendi rerum rectur animi, molestiae
                nisi doro minima ipsam, odit quae.
              </p>
            </div>
            <div className="col-lg-2 text-center col-sm-6">
              <h4 className="mb-3 foot-color">Links</h4>
              <ul className="list-unstyled text-light">
                <li>Home</li>
                <li>Shope</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-2 text-center col-sm-6">
              <h4 className="mb-3 foot-color">Help</h4>
              <ul className="list-unstyled text-light">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-12 text-sm-center mb-4">
              <h4 className="mb-3 foot-color">Newsletter</h4>
              <div>
                <input type="text" placeholder="Enter Your Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <span className="text-center d-block pt-4 text-light">
            2025 GAM. All rights reserved
          </span>
        </div>
      </div>
    );
  }
}
