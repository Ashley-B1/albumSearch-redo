import React from 'react';
import './Hero.css';

import NavBar from '../NavBar';
import ResultsContainer from '../ResultsDiv';

const HeroContainer = () => {
  return (
    <div className='hero-div'>
      <NavBar />
      <ResultsContainer />
    </div>
  )
}

export default HeroContainer
