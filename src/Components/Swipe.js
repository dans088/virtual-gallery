import React, { Component } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";
import './Carousel'

const Swipe =({children})=> {

  const [left, right] = useState(null);

    onSwipe(gestureName, gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <Carousel
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
      />
    );
  }
}

export default Swipe;