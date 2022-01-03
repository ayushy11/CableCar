import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { API_KEY } from "@env";
import tw from "tailwind-react-native-classnames";

const MapAutocomplete = () => {
  const [number, onChangeNumber] = useState(null);

  return (
    <TextInput
      nativeID="autocomplete"
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="places autocomplete"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MapAutocomplete;
