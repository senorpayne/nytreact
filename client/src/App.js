import React, { Component } from "react";
import Articles from "./Articles/Articles";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <title/>
          <h2>Welcome to NYTSCRAPPER!</h2>
            <Articles />
        </div>
       
      </div>
    );
  }
}

export default App;
