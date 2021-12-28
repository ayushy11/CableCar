import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { setDestination } from "../slices/navSlice";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //   dispatch(
  //       setDestination({
  //           location: details.geometry.location,
  //           description: data.description,
  //       })
  //   )

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

      <View
        style={tw`flex-row bg-white justify-evenly mt-auto py-2 border-t border-gray-200`}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RideOptionsCard");
          }}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            onPress={() => {
              navigation.navigate("RideOptionsCard");
            }}
            name="car"
            type="font-awesome"
            color="white"
            size={16}
          />
          <Text
            style={tw`text-white text-center`}
            onPress={() => {
              navigation.navigate("RideOptionsCard");
            }}
          >
            Rides
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-white text-center`}>Eats</Text>
        </TouchableOpacity>
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
