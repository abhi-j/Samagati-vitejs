import React, { Component } from "react";
import { Loader, LoaderOptions } from "google-maps";
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '40%',
//   height: '40%'
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: -1.2884,
//             lng: 36.8233
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
// })(MapContainer);

// or const {Loader} = require('google-maps'); without typescript

// const options: LoaderOptions = {/* todo */};
// const loader = new Loader('my-api-key', options);

// loader.load().then(function (google) {
//     const map = new google.maps.Map(document.getElementById('map') {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 8,
//     });
// });
