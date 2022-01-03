import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import logo from "../assets/cablecar.png";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourites";

import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import MapAutocomplete from "../components/MapAutocomplete";

const HomeScreen = () => {
  // const dispatch = useDispatch();

  // dispatch(setOrigin({
  //   location: details.geometry.location
  //   description: data.description
  // }))
  // dispatch(setDestination(null))

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={logo}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        />
        <MapAutocomplete />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
