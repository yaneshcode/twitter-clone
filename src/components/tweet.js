import React from 'react';

import "./tweet.css";
import TweetTile from "./tweetTile"

const Tweet = props => {
  return (
    <TweetTile>
      <div className="">
        {props.name} - {props.handle} - {props.date}<hr/>
        <p>{props.body}</p>
      </div>
    </TweetTile>
  )
}

export default Tweet;
