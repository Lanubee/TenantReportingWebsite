import './HomePage.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [selectedProblem, setSelectedProblem] = useState(null);

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

  /***
   * Method for handling when a button option is clicked
   * Sets 'selectedProblem' variable to a value selected
   */
  const handleProblemSelection = (buttonText) => {
    setSelectedProblem(buttonText);
    goToDetails();

    
    console.log('Selected Problem: ' + buttonText)
  };


  /***
   * Method for navigating to the Details page
   */
  const goToDetails = () => {
    navigate('/Details');
  }


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

    {/* Div for when the option 'bath and toilet' is selected. Hidden otherwise.
    {selectedProblem === 'Bathroom and Toilet' && (
      <div 
        className='bath-and-toilet-selected'>
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
    )}

      
    {/* Div for when the option 'Lighting' is selected. Hidden otherwise. */}
    {/* {selectedProblem === 'Lighting' && (
        <div className='lighting-selected'>
          {lightingItems.map(({ value, label }, index) => (
            <div key={index}>
              <input
                name = "lighting"
                type = "radio"
                value = {value}
                id = {value}
                onChange = {e => setSelectedProblem2(e.target.value)}
              />
            <label htmlFor = {value}>{label}</label>
          </div>
        ))}
      </div>  
    )} */}

    {/* Div for when the option 'Kitchen' is selected. Hidden otherwise. */}
    {/* {selectedProblem === 'Kitchen' && (
      <div className='kitchen-selected'>
        {kitchenItems.map(({ value, label}, index) => (
          <div key={index}>
            <input
              name = "kitchen"
              type = "radio"
              value = {value}
              id = {value}
              onChange = {e => setSelectedProblem2(e.target.value)}
            />
            <label htmlFor = {value}>{label}</label>
          </div>
        ))}
      </div>
    )} */}

    {/* Div for when the option 'Kitchen' is selected. Hidden otherwise. */}
    {/* {selectedProblem === 'Electricity' && (
      <div className='electricity-selected'>
        {electricityItems.map(({ value, label}, index) => (
          <div key={index}>
            <input
              name = "electricity"
              type = "radio"
              value = {value}
              id = {value}
              onChange = {e => setSelectedProblem2(e.target.value)}
            />
            <label htmlFor = {value}>{label}</label>
          </div>
        ))}
      </div>
    )} */}
    </div>
  );
}

export default HomePage;
