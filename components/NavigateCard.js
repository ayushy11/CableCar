import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { setDestination } from "../slices/navSlice";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const dispatch = useDispatch();

  //   dispatch(
  //       setDestination({
  //           location: details.geometry.location,
  //           description: data.description,
  //       })
  //   )

  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Navigate Card</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <Text
            onPress={() => {
              navigation.navigate("RideOptionsCard");
            }}
          >
            Places Autocomplete
          </Text>
        </View>

        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
