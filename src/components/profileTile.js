import React from 'react';

import "./profileTile.css";

const ProfileTile = props => {
  return (
    <div className="profile-tile-container">
      <div className="profile-pic">Profile pic here</div>
      <h1>{props.name}</h1><br/>
      Total tweets: {props.total}<br/>
      Followers: {props.followers}<br/>
      Following: {props.following}<br/>
    </div>
  )
}

export default ProfileTile;
