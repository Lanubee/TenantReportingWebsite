import logo from './logo.svg';
import './App.css';
import testImage from './images/Best_JJK_Character.webp'
import React, {useState, useEffect} from 'react';

function App() {

  const buttons = [
    {imageSrc: testImage, buttonText: 'nanami number 1'},
  ]

  const [selectedProblem, setSelectedProblem] = useState(null)

  const buttonList = [
    buttons.map(({imageSrc, buttonText}, index) => 
      <button key={index}>
        <img src={imageSrc} alt={buttonText} style={{ width: '50px', height: '50px', marginRight: '8px' }}
        />
        {buttonText}
        </button>
    )
  ]

  useEffect(() => {

  });


  return (
    <div classname='home_page'>
      <header classname='home_heading'>
        <h1>What is the Problem?</h1>
      </header>
      <div classname='button-list'>
        {buttonList}
      </div>
    </div>
  );
}

export default App;
