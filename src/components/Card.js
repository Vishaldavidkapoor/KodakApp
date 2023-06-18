import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Animated, {
  useAnimatedSensor,
  SensorType,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import Lottie from "lottie-react-native";

const Card = () => {
  const [fav, setFav] = useState(false);
  const animation = useRef(null);
  const IMAGE_OFFSET = 50;
  const sensor = useAnimatedSensor(SensorType.ROTATION);
  
  useEffect(() => {
    if (fav) {
      animation.current.play(0, 100);
    } else {
      animation.current.play(30, 120);
    }
  }, [fav]);
  const imageStyle = useAnimatedStyle(() => {
    const { yaw, pitch, roll } = sensor.sensor.value;

    return {
      top: interpolate(pitch, [-3.5, 3.5], [-IMAGE_OFFSET * 2, 0]),
      right: interpolate(roll, [-3.5, 3.5], [-IMAGE_OFFSET * 2, 0]),
    };
  });
  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.bg}
        source={require("../assets/Space/Space.png")}
      />
      <Animated.Image
        source={require("../assets/Dog/Dog.png")}
        style={[
          styles.dogImage,
          imageStyle,
        ]}
      />
      <View
        style={styles.neonLine}
      >
        <View   style={{
          height: 1,
          width: "100%", backgroundColor:'white'}} />
      </View>

      <View
        style={styles.container2}
      />
      <View
        style={styles.nameContainer}
      >
        <Text style={{ fontSize: 30, color: "white" }}> Canis infinitum</Text>
        <TouchableOpacity
          style={{ height: 90, width: "60%" }}
          onPress={() => setFav(!fav)}
        >
          <Image
            style={styles.heart}
            source={
              fav
                ? require("../assets/HeartFilled/HeartFilled.png")
                : require("../assets/HeartOutline/HeartOutline.png")
            }
          />
          <Lottie
            style={styles.animation}
            source={require("../assets/animation/HeartPop.json")}
            autoPlay={false}
            loop={false}
            ref={animation}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "10%",
    paddingBottom: "50%",
    bottom: "5%",
  },
  animation: { left: 50, height:120, position: "absolute", bottom: 5 },
  heart:{ height: 20, width: 23, top: 10, left: 150 },
  nameContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    bottom: 160,
  },
container2: {
  height: 60,
  width: "100%",
  opacity: 0.4,
  bottom: 110,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  backgroundColor: "white",
},
neonLine: {
  height: 10,
  width: "100%",
  borderRadius: 5,
  elevation: 3,
  bottom: 105,
  shadowRadius: 16,
  shadowColor: "#6730D5",
  backgroundColor : "#0000",
  justifyContent:'center'
},
dogImage:{
  height: "95%",
  width: "105%",
  marginLeft: -45,
  marginTop: 480,
},
bg: {
  height: "95%",
  width: "100%",
  position: "absolute",
  borderRadius: 30,
},

});

export default Card;
