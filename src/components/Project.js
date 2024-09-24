import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div className="project p-5 position-relative">
        <div className="container p-5">
          <div className="up mb-5">
            <div className="row pb-5">
              <div className="col-lg-6 mb-sm-4">
                <div className="left">
                  <span>Featured Project</span>
                  <h3 className="text-light">Example Project</h3>
                  <p className="text-light p-4 rounded">
                    A web app for visualizing personalized Spotify data. View
                    your top artists, top tracks, recently played tracks, and
                    detailed audio information about each track. Create and save
                    new playlists of recommended tracks based on your existing
                    playlists and more.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right position-relative project-image text-center">
                  <img
                    src={require("../photos/Screenshot 2022-09-20 at 11.44 1.png")}
                    alt="Project Screenshot"
                    className="position-relative z-1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="down position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="right position-relative project-image text-center">
                  <img
                    src={require("../photos/Screenshot 2022-09-20 at 11.44 1.png")}
                    alt="Project Screenshot"
                    className="position-relative z-1"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-sm-4">
                <div className="left">
                  <span>Featured Project</span>
                  <h3 className="text-light">Example Project</h3>
                  <p className="text-light p-4 rounded">
                    A web app for visualizing personalized Spotify data. View
                    your top artists, top tracks, recently played tracks, and
                    detailed audio information about each track. Create and save
                    new playlists of recommended tracks based on your existing
                    playlists and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
