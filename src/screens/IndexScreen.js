import React from "react";
import { View, Text, StyleSheet } from "react-native";

const IndexScreen = () => {
  return <View>
    <Text style={styles.text}>IndexScreen</Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default IndexScreen;
