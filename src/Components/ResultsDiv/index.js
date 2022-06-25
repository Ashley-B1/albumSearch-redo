import React from 'react';
import './ResultsDiv.css'

const ResultsContainer = () => {
  return (
    <div className='results'>
      <h2 id='intro' className="intro">Search Albums by Artist Name</h2>
      <div id="result-container"></div>
    </div>
  )
}

export default ResultsContainer
