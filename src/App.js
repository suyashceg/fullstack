import { useState } from 'react';
import './App.css';
import { Stack, Autocomplete, TextField } from '@mui/material';

const locations = ['delhi', 'mumbai', 'kolkata', 'chennai'];

const MultiAutocomplete = ({ value, onChange }) => {
  const handleChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Stack spacing={2} width={175}>
      <Autocomplete
        options={locations}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="location"
          />
        )}
      />
    </Stack>
  );
}

function App() {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');
  const [carType, setCarType] = useState('Hatchback');
  const [receiptVisible, setReceiptVisible] = useState(false);

  const handleStartingPointChange = (value) => {
    console.log('Starting Point:', value);
    setStartingPoint(value);
  };

  const handleDestinationChange = (value) => {
    console.log('Destination:', value);
    setDestination(value);
  };

  const handleCarTypeChange = (event) => {
    console.log('Car Type:', event.target.value);
    setCarType(event.target.value);
  };

  const handleBookClick = () => {
    console.log('Book button clicked');
    console.log('Starting Point:', startingPoint);
    console.log('Destination:', destination);
    console.log('Car Type:', carType);
    setReceiptVisible(true);
  };


  const calculateCharges = (carType, distance) => {
    let ratePerKm = 0;
    switch (carType) {
      case 'Hatchback':
        ratePerKm = 15;
        break;
      case 'Sedan':
        ratePerKm = 20;
        break;
      case 'SUV':
        ratePerKm = 30;
        break;
      default:
        ratePerKm = 0;
    }
    return ratePerKm * distance;
  };

  
  const distance = 1000; 

  
  const getCurrentDateTime = () => {
    
    return time;
  };

  return (
    <div className="App">
      <div className="mainDiv">
        <h1>GoTaxi</h1>
        <div className="starting">
          <label>Starting point </label>
          <MultiAutocomplete value={startingPoint} onChange={handleStartingPointChange} />
        </div>
        <div className="ending">
          <label>Destination </label>
          <MultiAutocomplete value={destination} onChange={handleDestinationChange} />
        </div>
        <div className="date">
          <label>Date and Time </label>
          <input type="datetime-local" value={time} onChange={(event)=>{setTime(event.target.value)}} />
        </div>
        <div className="car">
          <label>Type of car: </label>
          <select value={carType} onChange={handleCarTypeChange}>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
        <div className="btn">
          <input type="button" value="Book" onClick={handleBookClick} />
        </div>
      </div>
      {receiptVisible && (
        <div className="receipt">
          <h2>Receipt</h2>
          <p>Starting Point: {startingPoint}</p>
          <p>Destination: {destination}</p>
          <p>Charges: Rs {calculateCharges(carType, distance)}</p>
          <p>Date and Time: {getCurrentDateTime()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
