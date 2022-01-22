import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Marker, Popup } from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/cpr7/ckyog82r0opgi15pc56fofvki"
      >
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <LocationOnIcon style={{ fontSize: viewport.zoom * 7, color: 'slateblue' }} />
        </Marker>
        <Popup latitude={37.78} longitude={-122.41} closeButton={true} closeOnClick={true} anchor="left">
          <div className="card">
            <label>Place</label>
            <h4 className="place">Eiffell Tower</h4>
            <label>Review</label>
            <p>Beautiful Place. I like it.</p>
            <label>Rating</label>
            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <label>Information</label>
            <span className="username">
              Created by <b>Chandra</b>
            </span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;
