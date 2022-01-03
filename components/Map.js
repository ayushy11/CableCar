import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";

// import { MAPBOX_TOKEN } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const dispatch = useDispatch();

  // origin.location.lat
  // origin.location.lng

  //   const mapRef = useRef(null);

  // useEffect(() => {
  //   if (!origin || !destination) return;
  //   mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
  //     edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
  //   });
  // }, [origin, destination]);

  // useEffect(() => {
  //   if (!origin || !destination) return;

  //   const getTravelTime = async () => {
  //     fetch(`https://mapbox`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
  //       });
  //   };
  //   getTravelTime();
  // }, [origin, destination, MAPBOX_TOKEN]);

  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      // ref={mapRef}
    >
      {/* {origin && destination && ()} */}
      {/* <MapViewDirections
        ref={mapRef}
        origin="origin"
        destination="destination"
        apikey={MAPBOX_TOKEN}
        strokeWidth={3}
        strokeColor="black"
      /> */}

      {/* {origin?.location && ()} */}
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title="Origin"
        description="San Francisco"
        identifier="origin"
      />
      {/* {destination?.location && ()} */}
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.434,
        }}
        title="Destination"
        description="San Francisco"
        identifier="destination"
      />
    </MapView>
  );
};

export default Map;
