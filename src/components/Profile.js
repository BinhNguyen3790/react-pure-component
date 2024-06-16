import React, { Component } from "react";
import ProfilePicture from "./ProfilePicture";
class Profile extends Component {
  state = {
    like: 0,
  };
  likeImage = () => {
    let currentLike = this.state.like + 1;
    this.setState({
      like: currentLike,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <ProfilePicture />
          <div className="card-body">
            <h4 className="card-title">Roronoa Zoro</h4>
            <p className="card-text">Alway forget the way to go!!!</p>
            <p>Like: {this.state.like}</p>
            <button
              onClick={() => {
                this.likeImage();
              }}
            >
              Like <i className="fa fa-heart" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
