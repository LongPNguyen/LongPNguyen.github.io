import React, { Component } from 'react';
import {Header, Body, Footer} from './components/main';
import Showcase from './components/projects';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "antd/dist/antd.css";
import './App.css';

const styles = {
  container: {
    width: '100vw',
    height: '100%',
    top: 0,
    left: 0,
    background: 'white',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
  }
}
class App extends Component {
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Body />
        </header>
        <div id='projects' className="App-projects" style={styles.container}>
          <ScrollAnimation animateIn='fadeInUp'>
          <h1 className="projectsTitle" style={styles.fadeInUp}>Freelance Projects for Clients</h1>
          <Showcase />
          </ScrollAnimation>         
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
