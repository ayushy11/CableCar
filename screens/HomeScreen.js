import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import logo from "../assets/cablecar.png";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={logo}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        />
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
