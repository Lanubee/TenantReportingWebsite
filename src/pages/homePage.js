import './homePage.css';
import React, { useState, useEffect } from 'react';

// Importing Images
import lightingImage from '../images/lightbulb.jpg';
import electricalsImage from '../images/electricals.jpg';
import windowImage from '../images/window.jpg';
import radiatorImage from '../images/radiator.jpg';
import exteriorAndGardenImage from '../images/exteriorAndGarden.jpg';
import plumbingImage from '../images/Plumbing.jpg';
import leakImage from '../images/leak.png';
import laundryImage from '../images/laundry-machine.png';
import doorImage from '../images/door.png';
import livingRoomImage from '../images/living-room.png';
import furnitureImage from '../images/sideboard.png';
import waterImage from '../images/water.png';
import smokeDetectorImage from '../images/smoke-detector.png';
import roofImage from '../images/roofing.png';
import sharedFacilitiesImage from '../images/facility-management.png';
import meterImage from '../images/meter.png';
import internetImage from '../images/internet.png';
import stairsImage from '../images/stairs.png';
import propertyServicesImage from '../images/property.png'
import gasImage from '../images/gas.png';
import inspectionImage from '../images/inspection.png';
import pestsImage from '../images/pests.png';
import otherImage from '../images/problem.png';
import kitchenImage from '../images/kitchen.png';


export const HomePage = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedProblem2, setSelectedProblem2] = useState(null);
  const [bathAndToiletVisible, setBathAndToiletVisible] = useState(false);

  const buttons = [
    { buttonText: 'Bathroom and Toilet', imageSrc: plumbingImage},
    { buttonText: 'Lighting', imageSrc: lightingImage },
    { buttonText: 'Kitchen', imageSrc: kitchenImage},
    { buttonText: 'Electricity', imageSrc: electricalsImage }, 
    { buttonText: 'Window', imageSrc: windowImage},
    { buttonText: 'Exterior and Garden', imageSrc: exteriorAndGardenImage},
    { buttonText: 'Heating and Boiler', imageSrc: radiatorImage},
    { buttonText: 'Water and Leaks', imageSrc: leakImage},
    { buttonText: 'Laundry', imageSrc: laundryImage},
    { buttonText: 'Doors, Garages and Locks', imageSrc: doorImage},
    { buttonText: 'Internal Floors, Walls & Ceilings', imageSrc: livingRoomImage},
    { buttonText: 'Furniture', imageSrc: furnitureImage},
    { buttonText: 'Hot Water', imageSrc: waterImage},
    { buttonText: 'Alarms and Smoke Detector', imageSrc: smokeDetectorImage},
    { buttonText: 'Roof', imageSrc: roofImage},
    { buttonText: 'Communal / Shared Facilities', imageSrc: sharedFacilitiesImage},
    { buttonText: 'Utility Meters', imageSrc: meterImage},
    { buttonText: 'Internet', imageSrc: internetImage},
    { buttonText: 'Stairs', imageSrc: stairsImage},
    { buttonText: 'Property Services', imageSrc: propertyServicesImage},
    { buttonText: 'Smell Gas?', imageSrc: gasImage},
    { buttonText: 'Property Inspection', imageSrc: inspectionImage},
    { buttonText: 'Pests', imageSrc: pestsImage},
    { buttonText: 'Other', imageSrc: otherImage}
  ];

  const bathAndToiletItems = [
    { value: 'sink', label: 'Sink'},
    { value: 'bath', label: 'Bath'},
    { value: 'electricShower', label: 'Electric Shower'},
    { value: 'extractorFan', label: 'Extractor Fan'},
    { value: 'shower', label: 'Shower'},
    { value: 'toilet', label: 'Toilet'}
  ]

  /***
   * Method for handling when a button option is clicked
   * Sets 'selectedProblem' variable to a value selected
   */
  const handleProblemSelection = (buttonText) => {
    setSelectedProblem(buttonText);
    console.log('Selected Problem: ' + buttonText)
    console.log('bathandtoiletvisible: ' + bathAndToiletVisible)
  };

  useEffect(() => {
    if(selectedProblem === 'Bathroom and Toilet'){
      setBathAndToiletVisible(true);
    }
    else{
      setBathAndToiletVisible(false);
    }

  },[selectedProblem, setBathAndToiletVisible])



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

      <div 
      className='bath-and-toilet-selected' 
      style={{display : bathAndToiletVisible ? 'block' : 'none'}}>
  {bathAndToiletItems.map(({ value, label }, index) => (
    <div key={index}>
      <input
        name="bathAndToilet"
        type="radio"
        value={value}
        id={value}
        onChange={e => setSelectedProblem2(e.target.value)}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  ))}
</div>

    </div>
  );
}

export default HomePage;
