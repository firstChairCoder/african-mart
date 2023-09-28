import type { FC } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";

import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  dot: {
    borderRadius: 4,
    height: 8,
    margin: 4,
    width: 8
  }
});

interface DotProps {
  index: number;
  backgroundColor?: string;
  currentIndex: Animated.SharedValue<number>;
}
const Dot: FC<DotProps> = ({ index, currentIndex }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      backgroundColor: index ? colors.grey : colors.orange,
      transform: [{ scale }]
    };
  });

  return <Animated.View style={[styles.dot, style]} />;
};

export default Dot;
