import React, { Component, PureComponent } from "react";

class ProfilePicture extends PureComponent {
  render() {
    console.log("load img");
    return (
      <div>
        <img className="card-img-top" src="https://gamek.mediacdn.vn/133514250583805952/2024/1/24/photo-1706086830143-17060868303522136451227.png" alt="Title" />
      </div>
    );
  }
}

export default ProfilePicture;
