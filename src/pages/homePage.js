import './homePage.css';
import React, { useState, useEffect } from 'react';
import lightingImage from '../images/lightbulb.jpg';

export const HomePage = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const buttons = [
    { /*imageSrc: testImage*/ buttonText: 'Plumbing' },
    // { imageSrc: image2, buttonText: 'Lighting' },
    // { imageSrc: image3, buttonText: 'Electricals' },
    { buttonText: 'Lighting', imageSrc: lightingImage },
    { buttonText: 'Electricals' } // Placeholder without image
  ];

  const handleProblemSelection = (buttonText) => {
    setSelectedProblem(buttonText);
  };


  return (
    <div className='home_page'>
      <header className='home_heading'>
        <h1>What is the Problem?</h1>
      </header>
      <div className='button-list'>
        {buttons.map(({ imageSrc, buttonText }, index) => (
          <button key={index} onClick={() => handleProblemSelection(buttonText)}>
            {imageSrc && (
              <img
                src={imageSrc}
                alt={buttonText}
                style={{ width: '50px', height: '50px', marginRight: '8px' }}
              />
            )}
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
