import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import Card from "./src/components/Card";
import LinearGradient from "react-native-linear-gradient";


export default function App() {

 
  return (
      <LinearGradient colors={['#150E21','#212121']} style={styles.container} >
         <Card />
      </LinearGradient>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
