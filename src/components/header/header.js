import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render () {
    return (
      <div>
        <div className='header-container'>
          <div className='header-container__title'>
          <Link to='/'>Home</Link>
          </div>
          <div className='header-container__hero'>
            <Link to='/heroes'>Heroes</Link>
          </div>
          <div className='header-container__villain'>
            <Link to='/villains'>Villains</Link>
          </div>
        </div>
      </div>
    )
  }
}
