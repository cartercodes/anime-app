import React, { Component } from 'react';
import Header from './header/header';
// import HeroList from './herolist/heroList';
// import VillainList from './villainlist/villainList';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Header />
          <p className="app-text"> MY TOP ANIME CHARACTERS</p>
          <div className="app-body">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/_2MmlMxuDFQ" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullscreen="allowFullscreen"
            color='white'
          >
          </iframe>
          </div>
        </div>
      </div>
    );
  }
}
