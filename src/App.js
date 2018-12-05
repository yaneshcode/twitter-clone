import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Tweet from './components/tweet';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header title="Twitter Clone"/>
        <Tweet name="Yanesh" handle="@myhandle" date="Dec 4, 2008" body="This is a tweet!"/>
        <Tweet name="Yanesh" handle="@myhandle" date="Dec 4, 2008" body="This is a tweet!"/>
        <Tweet name="Yanesh" handle="@myhandle" date="Dec 4, 2008" body="This is a tweet!"/>
        <Tweet name="Yanesh" handle="@myhandle" date="Dec 4, 2008" body="This is a tweet!"/>
      </div>
    );
  }
}

export default App;
