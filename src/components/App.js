import React, { Component } from 'react';
import Header from "./HeadContentFooter/Header";
import Content from "./HeadContentFooter/Content";
import Footer from "./HeadContentFooter/Footer";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;