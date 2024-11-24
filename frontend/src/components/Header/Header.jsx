import React, { useState, useRef, useCallback } from "react";
import { StandaloneSearchBox, useLoadScript, GoogleMap } from "@react-google-maps/api";
import './Header.css';

const libraries = ["places"]; // Load the Places library for the search box

const mapContainerStyle = {
  width: "100%",
  height: "400px", // You can adjust the height of the map container
};

const center = {
  lat: 37.7749, // Default to San Francisco (latitude)
  lng: -122.4194, // Default to San Francisco (longitude)
};

const Header = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8", // Replace with your actual API key
    libraries,
  });

  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(center); // Default center location
  const searchBoxRef = useRef(null);

  const onMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSelectedPlace(location);
      map.panTo(location); // Center the map to the searched location
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Welcome to Hungry Birds</h2>
        <p>Food is not Rational.</p>
        <p>Food is Culture, Habit, Craving, and Identity.</p>

        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={onPlacesChanged}
        >
          <input 
            type="text" 
            placeholder="Search for a location..." 
            className="search-bar" 
          />
        </StandaloneSearchBox>

        <div style={{ marginTop: "20px" }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={selectedPlace} // Center the map based on the selected place
            onLoad={onMapLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
