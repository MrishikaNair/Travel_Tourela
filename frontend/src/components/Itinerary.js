import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

// const Marker = (options) => {
//   const [marker, setMarker] = React.useState();

//   React.useEffect(() => {
//     if (!marker) {
//       setMarker(new google.maps.Marker());
//     }

//     // remove marker from map on unmount
//     return () => {
//       if (marker) {
//         marker.setMap(null);
//       }
//     };
//   }, [marker]);
//   React.useEffect(() => {
//     if (marker) {
//       marker.setOptions(options);
//     }
//   }, [marker, options]);
//   return null;
// };


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
    });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
            >
            <Marker
                onClick={this.onMarkerClick}
                name={'Delhi'}
                />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`
})(MapContainer);




///////////////////////////////////////////////////////////////////////



// import React from "react"
// import "../styles/itinerary.css"

// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   position,
//   SkeletonText,
//   Text,
  
// } from '@chakra-ui/react'
// import { FaLocationArrow, FaTimes } from 'react-icons/fa'

// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   createMarker,
//   googleMap,
//   googleMapRef,
//   Autocomplete,
//   InfoWindow,
//   //DirectionsRenderer,
// } from '@react-google-maps/api'
// import { useEffect, useRef, useState } from 'react'

// const center = { lat: 28.7041, lng: 77.1025 }
// const loc=[{lat:28.5245,lng: 77.1855},{lat:28.6507,lng: 77.2334},{lat:28.5535,lng: 77.2588},{lat:28.5459,lng: 77.2732}]


// export default function Itinerary() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_API_KEY,
//     libraries: ['places'],
//   })

  

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null))
//   //const [directionsResponse, setDirectionsResponse] = useState(null)
//   const [distance, setDistance] = useState('')
//   const [duration, setDuration] = useState('')

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef()
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destiantionRef = useRef()

//   if (!isLoaded) {
//     return <SkeletonText />
//   }
  
// /*
//   async function calculateRoute() {
//     if (originRef.current.value === '' || destiantionRef.current.value === '') {
//       return
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService()
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destiantionRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     setDirectionsResponse(results)
//     setDistance(results.routes[0].legs[0].distance.text)
//     setDuration(results.routes[0].legs[0].duration.text)
//   }

//   function clearRoute() {
//     setDirectionsResponse(null)
//     setDistance('')
//     setDuration('')
//     originRef.current.value = ''
//     destiantionRef.current.value = ''
//   }
// */




// function addmarker(loc)
// {
//   return loc.map((iter, index) => {
//     return <Marker key={index} position={iter} icon="https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-address-map-pointers-flat-icons-inmotus-design.png"/>
//   })
//   // for(let i=0;i<loc.length;i++)
//   //   return <Marker position={loc[i]}/>
// }



//   return (
//     <Flex
//       position='relative'
//       flexDirection='column'
//       alignItems='center'
//       backgroundColor="#1b1b1b"
//       h='100vh'
//       w='100vw'
//     >
//       <Box position='absolute' right={0} top={0} h='100%' w='100%'>
//         {/* Google Map Box */}
//         <GoogleMap
//           position='absolute'
//           right={0}
//           center={center}
//           zoom={12}
//           mapContainerStyle={{ width: '100%', height: '100%'}}
//           options={{
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//           }}
          
//           onLoad={map => setMap(map)}
//         >

          
//           <Marker position={center} icon="https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-address-map-pointers-flat-icons-inmotus-design.png"/>
//           {addmarker(loc)}
          
          
//         </GoogleMap>
//       </Box>
      
//     </Flex>
//   )
// }