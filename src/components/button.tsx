import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";
import type { FC } from "react";

import { CartIcon } from "./Icon";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.orange,
    borderRadius: 40,
    bottom: 12,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    position: "absolute",
    width: "90%"
  },
  btnText: {
    color: colors.white,
    fontFamily: "Regular",
    fontSize: 12,
    marginLeft: 8
  }
});

interface CartButtonProps {
  size: "small" | "large";
  label: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const CartButton: FC<CartButtonProps> = ({
  size,
  label,
  style,
  textStyle,
  onPress
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { maxWidth: size === "large" ? undefined : 220 },
        style
      ]}
    >
      {size === "small" && <CartIcon />}
      <Text style={[styles.btnText, textStyle]}>{label}</Text>
    </Pressable>
  );
};

export default CartButton;
