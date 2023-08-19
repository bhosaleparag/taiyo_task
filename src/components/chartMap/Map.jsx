import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS
import axios from 'axios';


const Map = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        setCountriesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countriesData.map((countryData) => (
          <Marker
            key={countryData.countryInfo.lat}
            position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
          >
            <Popup className="bg-white p-2 rounded-lg shadow-md">
              <div>
                <h2 className="font-semibold text-lg">{countryData.country}</h2>
                <p>Total Cases: {countryData.cases}</p>
                <p>Recovered: {countryData.recovered}</p>
                <p>Deaths: {countryData.deaths}</p>
                <p>Active Cases: {countryData.active}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
