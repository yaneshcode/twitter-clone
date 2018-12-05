import React from 'react';

import "./tweet.css";
import TweetTile from "./tweetTile"

const Tweet = props => {
  return (
    <TweetTile>
      <div className="">
        {props.name}<br/>
        {props.handle} - {props.date}<br/>
        {props.body}
      </div>
    </TweetTile>
  )
}

export default Tweet;
