import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className='homelanding-page'>
        <div className='homepage-title'>
          <h1> Game Name </h1>
          <p> Come join the adventure of a lifetime! </p>
          <button className='play-button' type='button'>PLAY NOW!</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
