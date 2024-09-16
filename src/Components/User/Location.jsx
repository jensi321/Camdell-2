import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const Location = ({ onClose, onLocationChange }) => {
  const [location, setLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const handleOK = () => {
    if (useCurrentLocation) {
      onLocationChange(location);
    } else {
      onLocationChange(inputValue);
      console.log("user Locttion Enter:",inputValue)
    }
    alert("your Loction Updated Successfully")

    onClose();
  };

  const handleGetCurrentLocation = () => {
    setUseCurrentLocation(true);
    navigator.geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      console.log("user Current Loction Lat & Lng:",{
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })

      setError(null);
    }, error => {
      setError(error.message);
      setCurrentLocation(null);
    });
  };

  const getlocationName = async (lat, lng) => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBLXdlVz6aApOWGPNi8fj1Q1VXzGrly1GU`);
      const data = await response.json();
      if (data.results.length > 0) {
        console.log(data.results)
        setLocation(data.results[0].formatted_address);
        setInputValue(data.results[0].formatted_address); // Update inputValue with current location
      } else {
        setLocation('');
        console.log(data)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentLocation) {
      getlocationName(currentLocation.lat, currentLocation.lng);
    }
  }, [currentLocation]);

  return (
    <>
      <div className="location-outer">
        <div className="location-inner">
          <div className="heading">
            <span className='icon'>
              <MdMyLocation />
            </span>
            <h3>Use Your Location</h3>
          </div>

          <form>
            <div className="input-group">
              <span><FaLocationDot /></span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setUseCurrentLocation(false);
                }}
                placeholder="Enter location"
              />
            </div>
            <span className='or'>or</span>
            <Link onClick={handleGetCurrentLocation}><FaMapMarkerAlt />Use current location</Link>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="button-group">
              <button className='border-button'>Cancel</button>
              <Link className='button' onClick={handleOK} >OK</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Location;