import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Tweet from './components/tweet';
import ProfileTile from './components/profileTile';

class App extends Component {

  tweetLoop = () => {
    let result = [];

    for(var i = 0; i < 10; i++) {
      let bodyStr = "This is tweet #" + i;
      result.push(<Tweet name="Yanesh" handle="@myhandle" date="Dec 4, 2008" body={bodyStr}/>);
    }

    return result;
  }
  render() {
    return (

      <div className="App">
        <Header title="Twitter Clone"/>
        <div className="main-container">
          <ProfileTile name="Yanesh" total="123" followers="0" following="9000" />
          <div className="tweet-container">
            {this.tweetLoop()}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
