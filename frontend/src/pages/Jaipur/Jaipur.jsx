import React from 'react';
import './Jaipur.css'; // Make sure to add styles in a CSS file

function Jaipur() {
  const places = [
    {
      name: 'Amber Fort',
      location: 'Devisinghpura, Amer, Jaipur',
      image: 'https://example.com/amber-fort.jpg', // Replace with actual image URL or import your local images
      rating: 4.7,
    },
    {
      name: 'Hawa Mahal',
      location: 'Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur',
      image: 'https://example.com/hawa-mahal.jpg',
      rating: 4.6,
    },
    {
      name: 'City Palace',
      location: 'Tulsi Marg, Gangori Bazaar, Jaipur',
      image: 'https://example.com/city-palace.jpg',
      rating: 4.5,
    },
  ];

  return (
    <div className="jaipur-container">
      <h1>Welcome to Jaipur</h1>
      <p>Explore the beauty of Jaipur city!</p>

      <div className="places-grid">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.image} alt={place.name} className="place-image" />
            <div className="place-info">
              <h3>{place.name}</h3>
              <p>{place.location}</p>
              <div className="place-rating">
                <span>Rating: {place.rating} ⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jaipur;
